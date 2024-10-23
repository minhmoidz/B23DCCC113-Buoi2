import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/productSlice.jsx'; // Sử dụng default import

// Tạo store và kết nối reducer
export const store = configureStore({
  reducer: {
    products: productReducer // Gán reducer cho key 'products'
  }
});
