import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RebateItem = {
  imageUrl: string;
  title: string;
  price: number;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface RebateSliceState {
  rebates: RebateItem[];
  status: Status;
}
const initialState: RebateSliceState = {
  rebates: [],
  status: Status.LOADING,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный экшен для получения данных
export const fetchRebate = createAsyncThunk<RebateItem[]>('data/fetchRebateStatus', async () => {
  const response = await axios.get('https://66e33761494df9a478e4a5ff.mockapi.io/actions');
  return response.data;
});

export const rebateSlice = createSlice({
  name: 'rebate',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<RebateItem[]>) {
      state.rebates = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRebate.pending, (state) => {
        state.status = Status.LOADING;
        state.rebates = [];
      })
      .addCase(fetchRebate.fulfilled, (state, action) => {
        state.rebates = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchRebate.rejected, (state) => {
        state.status = Status.ERROR;
        state.rebates = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = rebateSlice.actions;

export default rebateSlice.reducer;
