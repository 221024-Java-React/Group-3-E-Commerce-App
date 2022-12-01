import {configureStore} from '@reduxjs/toolkit';

import UserSlice from './Slices/PersonSlice';
import ProductSlice from './Slices/ProductSlice';
import OrderSlice from './Slices/OrderSlice';
import PaymentSlice from './Slices/PaymentSlice';

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        user: UserSlice,
        order: OrderSlice,
        payment: PaymentSlice
    },
    devTools:true
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;