import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderDetail } from '../../Types/OrderDetail';

interface OrderSliceState {
    orders: OrderDetail[]
};

const initialState:OrderSliceState = {
    orders: []
};

//Create our slice and map our reducers
export const OrderSlice = createSlice({
    //we need to name our slice
    name: "order",
    initialState,
    reducers: {

        addOrder: (state:OrderSliceState, action:PayloadAction<OrderDetail>) => {
            state.orders = [...state.orders, action.payload];
            return state;
        },

        checkoutOrder: (state:OrderSliceState, action:PayloadAction<OrderDetail>) => {
            state.orders = [...state.orders, action.payload];
            return state;
        },

        removeOrder: (state:OrderSliceState, action:PayloadAction<number>) => {
            state.orders = state.orders.filter((order:OrderDetail) => order.id !== action.payload);
            return state
        },
    }
});

export const {addOrder, checkoutOrder, removeOrder} = OrderSlice.actions;
export default OrderSlice.reducer;