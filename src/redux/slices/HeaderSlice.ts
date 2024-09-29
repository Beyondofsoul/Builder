import { createSlice } from '@reduxjs/toolkit';

export interface HeaderState {
  value: number;
}

const initialState: HeaderState = {
  value: 0,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    open: (state) => {
      state.value = 1;
    },
    close: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = headerSlice.actions;

export default headerSlice.reducer;
