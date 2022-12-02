import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from '../../Types/Order';

interface OrderSliceState {
    orders: Order[]
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

        addOrder: (state:OrderSliceState, action:PayloadAction<Order>) => {
            state.orders = [...state.orders, action.payload];
            return state;
        },

        updateOrder: (state:OrderSliceState, action:PayloadAction<Order>)=> {
            for(let i = 0; i<state.orders.length; i++){
                let order = state.orders[i];
                if(order.id === action.payload.id){
                    order.id = order.id;
                    order.total_price= order.total_price;
                    order.total_items = order.total_items;
                    order.tax =  order.tax;
                    order.shipping_price = order.shipping_price; 
                    state.orders.splice(i, 1, order);
                }
            }
        },

        checkoutOrder: (state:OrderSliceState, action:PayloadAction<Order>) => {
            state.orders = [...state.orders, action.payload];
            return state;
        },

        removeOrder: (state:OrderSliceState, action:PayloadAction<number>) => {
            state.orders = state.orders.filter((order:Order) => order.id !== action.payload);
            return state;
        }
    }
});

export const {addOrder, checkoutOrder, removeOrder, updateOrder} = OrderSlice.actions;
export default OrderSlice.reducer;