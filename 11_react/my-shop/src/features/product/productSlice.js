import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    selectedProduct: null
};

const productSlice = createSlice({
    name: 'product',
    initialState ,
    reducers: {
        getAllproducts: (state,action) => {
            state.productList = action.payload;
        },
        getProductById: (state,action) => {
            state.selectedProduct = action.payload;
        },
    }
});

export const { getAllproducts, getProductById } = productSlice.actions;
export const selecteProductList = state => state.product.productList;
export const selectSelectedProduct = state => state.product.productList;

export default productSlice.reducer;