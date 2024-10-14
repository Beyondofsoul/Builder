import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  count: number;
  price: number;
}

export interface CartState {
  items: { [key: string]: CartItem };
  totalPrice: number;
}

const initialState: CartState = {
  items: {},
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, price } = action.payload;

      if (id in state.items) {
        state.items[id].count++;
      } else {
        state.items[id] = { ...action.payload, count: 1 };
      }
      state.totalPrice += price;
    },
    removeItem(state, action) {
      const id = action.payload;
      if (id in state.items) {
        state.totalPrice -= state.items[id].price * state.items[id].count;
        delete state.items[id];
      }
    },
    minusItem(state, action) {
      const id = action.payload;
      if (id in state.items) {
        if (state.items[id].count > 1) {
          state.items[id].count--;
          state.totalPrice -= state.items[id].price;
        } else {
          state.totalPrice -= state.items[id].price;
        }
      }
    },
    updateTotalPrice(state) {
      state.totalPrice = Object.values(state.items).reduce(
        (sum, item) => sum + item.price * item.count,
        0,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, minusItem, updateTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
