import { Get } from "@/Api";
import { Url_Keys } from "@/Constant/Url";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface PrivacyPolicyType {
  _id: string;
  isDeleted: boolean;
  createdAt: string;
  privacyPolicy: string;
  updatedAt: string;
}

export interface AboutSliceType {
  allPrivacyPolicy: PrivacyPolicyType | null;
}

const initialState: AboutSliceType = {
  allPrivacyPolicy: null,
};

export const fetchSalesmanApiData = createAsyncThunk<PrivacyPolicyType, void>("admin/privacy-policy", async () => {
  const response = await Get<PrivacyPolicyType>(Url_Keys.PrivacyPolicy.PrivacyPolicy);
  return response?.data!;
});

const AboutSlice = createSlice({
  name: "privacyPolicy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSalesmanApiData.fulfilled, (state, action) => {
      state.allPrivacyPolicy = action.payload;
    });
  },
});

export default AboutSlice.reducer;
