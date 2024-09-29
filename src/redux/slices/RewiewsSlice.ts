import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RewiewsItem = {
  imageUrl: string;
  title: string;
  price: number;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface RewiewsSliceState {
  rewiew: RewiewsItem[];
  status: Status;
}
const initialState: RewiewsSliceState = {
  rewiew: [],
  status: Status.LOADING,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный экшен для получения данных
export const fetchRewiews = createAsyncThunk<RewiewsItem[]>('data/fetchRewiewsStatus', async () => {
  const response = await axios.get('https://66abc9cdf009b9d5c7305643.mockapi.io/Rewiews');
  return response.data;
});

export const rewiewsSlice = createSlice({
  name: 'rewiews',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<RewiewsItem[]>) {
      state.rewiew = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewiews.pending, (state) => {
        state.status = Status.LOADING;
        state.rewiew = [];
      })
      .addCase(fetchRewiews.fulfilled, (state, action) => {
        state.rewiew = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchRewiews.rejected, (state) => {
        state.status = Status.ERROR;
        state.rewiew = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = rewiewsSlice.actions;

export default rewiewsSlice.reducer;
