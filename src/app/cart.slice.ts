import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const CART_PERSISTENT_STATE = "cartData";

export interface ICartItem {
  id: number;
  count: number;
}

export interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = loadState(CART_PERSISTENT_STATE) ?? { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleanCart: (state) => {
      state.items = [];
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    decreaseInCart: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) return;

      if (existed.count === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      } else {
        state.items.map((i) => {
          if (i.id === action.payload) i.count -= 1;

          return i;
        });

        return;
      }
    },
    increaseInCart: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });

        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }

        return i;
      });
    },
  },
});

export default cartSlice.reducer;
export const { cleanCart, deleteFromCart, decreaseInCart, increaseInCart } = cartSlice.actions;
