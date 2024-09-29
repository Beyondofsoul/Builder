import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BrandsItem = {
  imageUrl: string;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface BrandsSliceState {
  brand: BrandsItem[];
  status: Status;
}
const initialState: BrandsSliceState = {
  brand: [],
  status: Status.LOADING,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный экшен для получения данных
export const fetchBrands = createAsyncThunk<BrandsItem[]>('data/fetchBrandsStatus', async () => {
  const response = await axios.get('https://66ed39ba380821644cdc08c3.mockapi.io/brands');
  return response.data;
});

export const brandsSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<BrandsItem[]>) {
      state.brand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = Status.LOADING;
        state.brand = [];
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brand = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchBrands.rejected, (state) => {
        state.status = Status.ERROR;
        state.brand = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = brandsSlice.actions;

export default brandsSlice.reducer;
