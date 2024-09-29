import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OpenState {
  [swap: string]: boolean;
}

const initialState: OpenState = {};

export const openSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string>) => {
      const swap = action.payload;
      state[swap] = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open } = openSlice.actions;

export default openSlice.reducer;
