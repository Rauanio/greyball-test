import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../api/getProducts";
import { Product } from "@/shared/types/product.types";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);

export interface ProductsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  items: Product[]
}

const initialState: ProductsState = {
    items: [],
    status: 'idle'
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {reducer: productsReducer} = productsSlice
