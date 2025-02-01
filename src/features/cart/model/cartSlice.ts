import { CartItem } from '@/shared/types/cart.types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  totalCount: number
  totalItems: number
  items: CartItem[]
}

const initialState: CartState = {
  totalCount: 0,
  totalItems: 0,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });
      state.totalCount += action.payload.price;
      state.totalItems++;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex((i) => i.id === action.payload);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalCount -= item.price * item.quantity;
        state.totalItems -= item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const { reducer: cartReducer } = cartSlice 