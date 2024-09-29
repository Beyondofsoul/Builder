import { createSlice } from '@reduxjs/toolkit';

export interface OfferState {
  value: number;
}

const initialState: OfferState = {
  value: 0,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    swapNext: (state) => {
      state.value = 1;
    },
    swapReverse: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { swapNext, swapReverse } = offerSlice.actions;

export default offerSlice.reducer;
