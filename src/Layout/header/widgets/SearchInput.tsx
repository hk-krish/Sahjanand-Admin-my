import React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "reactstrap";
import { menuList } from "../../../Data/Layout/SidebarMenuList";
import { getLinkItemsArray, setResponsiveSearch } from "../../../reduxToolkit/reducers/layout/layoutSlice";
import { MenuItem, SearchItems } from "../../../Types/Layout";
import SearchResults from "./common/SearchResults";
import { useAppDispatch, useAppSelector } from "../../../reduxToolkit/hooks";
import SvgIcon from "../../../coreComponents/SvgIcon";

const SearchInput = () => {
  const { responsiveSearch } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState<SearchItems[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchItems[]>([]);

  useEffect(() => {
    const suggesionArray: SearchItems[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.menu) {
        item.menu.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggesionArray.push({ icon: icon, title: item.title, url: item.url || "", bookmarked: false, id: num });
      }
    };
    menuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggesionArray);
    dispatch(getLinkItemsArray(suggesionArray));
  }, [dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    let data = [...arr];
    let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };
  return (
    <li className="search_input">
      <div className="search-box" onClick={() => dispatch(setResponsiveSearch())}>
        <SvgIcon iconId="search" />
      </div>
      <div className={`form-group search-form ${responsiveSearch ? "open" : ""}`}>
        <Input type="text" placeholder="Search here..." value={searchedWord} onChange={(e) => handleSearch(e)} />
        <div className={`typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
          <SearchResults searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
        </div>
      </div>
    </li>
  );
};
export default SearchInput;
