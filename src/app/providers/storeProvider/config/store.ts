import { cartReducer } from '@/features/cart';
import { filtersReducer } from '@/features/filters';
import { productsReducer } from '@/features/products';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
