import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Payment } from '../../Types/Payment';

interface PaymentSliceState {
    payments:Payment[]
};

const initialState:PaymentSliceState = {
    payments:[]
};

export const PaymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addPayment: (state:PaymentSliceState, action:PayloadAction<Payment>) => {
            state.payments = [...state.payments, action.payload];
            return state;
        },

        removePayment: (state:PaymentSliceState, action:PayloadAction<number>) => {
            state.payments = state.payments.filter((payment:Payment) => payment.id !== action.payload);
            return state;
        }
    }
});

export const { addPayment, removePayment } = PaymentSlice.actions;
export default PaymentSlice.reducer;
