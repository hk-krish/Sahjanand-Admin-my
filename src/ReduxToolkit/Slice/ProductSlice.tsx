import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddProductModal: false,
};

const ProductSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setAddProductModal: (state) => {
      state.isAddProductModal = !state.isAddProductModal;
    },
  },
});

export const { setAddProductModal } = ProductSlice.actions;
export default ProductSlice.reducer;
