import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  items: any;
  totalPrice: number;
  count: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  count: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj: any) => obj.id == action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    addPrice(state) {
      state.totalPrice = state.items.reduce((sum: number, obj: any) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
