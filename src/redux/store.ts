import { configureStore } from '@reduxjs/toolkit';
import HeaderReducer from './slices/HeaderSlice';
import OffersReducer from './slices/OfferSlice';
import CounterReducer from './slices/CounterSlice';
import OpenReducer from './slices/OpenSlice';
import ProductsReducer from './slices/ProductsSlice';
import CartReducer from './slices/CartSlice';
import RebateReducer from './slices/RebateSlice';
import BrandsReducer from './slices/BrandsSlice';
import RewiewsReducer from './slices/RewiewsSlice';

export const store = configureStore({
  reducer: {
    header: HeaderReducer,
    offer: OffersReducer,
    count: CounterReducer,
    open: OpenReducer,
    product: ProductsReducer,
    rebate: RebateReducer,
    cart: CartReducer,
    brand: BrandsReducer,
    rewiews: RewiewsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
