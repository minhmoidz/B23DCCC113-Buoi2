import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        searchQuery: '', // Trường lưu truy vấn tìm kiếm
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        searchProduct: (state, action) => {
            state.searchQuery = action.payload; // Cập nhật truy vấn tìm kiếm
        },
    },
});

export const { addProduct, deleteProduct, editProduct, searchProduct } = productSlice.actions;
export default productSlice.reducer;
