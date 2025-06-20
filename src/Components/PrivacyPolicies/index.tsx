import { Post } from "@/Api";
import { Url_Keys } from "@/Constant/Url";
import Breadcrumbs from "@/CoreComponents/Breadcrumbs";
import Information from "@/CoreComponents/Information";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { fetchSalesmanApiData } from "@/ReduxToolkit/Slice/AboutSlice";
import { FormEvent, Fragment, useEffect, useState } from "react";
import { Col, Container } from "reactstrap";

const PrivacyPoliciesContainer = () => {
  const [editorContent, setEditorContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { allPrivacyPolicy } = useAppSelector((state) => state.about);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await Post(Url_Keys.PrivacyPolicy.PrivacyPolicyEdit, { privacyPolicy: editorContent });
      if (response?.status === 200) {
        setIsEditing(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(fetchSalesmanApiData());
  }, [dispatch]);

  useEffect(() => {
    if (allPrivacyPolicy) {
      setEditorContent(allPrivacyPolicy?.privacyPolicy);
    }
  }, [allPrivacyPolicy]);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Privacy Policies" parent="Pages" />
      <Container fluid>
        <Col xl="12">
          <Information headerTitle="Privacy Policies" editorContent={editorContent} setEditorContent={setEditorContent} handleSubmit={handleSubmit} isEditing={isEditing} setIsEditing={setIsEditing} />
        </Col>
      </Container>
    </Fragment>
  );
};

export default PrivacyPoliciesContainer;
