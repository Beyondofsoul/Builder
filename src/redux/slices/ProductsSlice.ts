import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductsItem = {
  imageUrl: string;
  title: string;
  price: number;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface ProductsSliceState {
  items: ProductsItem[];
  status: Status;
}
const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный экшен для получения данных
export const fetchProducts = createAsyncThunk<ProductsItem[]>(
  'data/fetchProductsStatus',
  async () => {
    const response = await axios.get(
      'https://66ed39ba380821644cdc08c3.mockapi.io/Products?page=1&limit=8',
    );
    return response.data;
  },
);

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductsItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
