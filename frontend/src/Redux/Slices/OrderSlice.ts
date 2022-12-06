import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from '../../Types/Order';
import { OrderDetail } from "../../Types/OrderDetail";

interface OrderSliceState {
    orders: Order[]
};

const initialState:OrderSliceState = {
    orders: []
};


export const createOrder = createAsyncThunk(
    'user/addToCard',
    async(order:OrderDetail, thunkAPI) => {
        try{
            
            const res = await axios.post("http://localhost:8500/orders/addTocart", order);

            return {orders :res.data};
        } catch(e) {
            return thunkAPI.rejectWithValue('Item Already Exist');
        }
    }
);

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
        },
    },
        extraReducers: (builder) => {
            builder.addCase(createOrder.fulfilled, (state, action) => {
                localStorage.setItem('orders', JSON.stringify(action.payload.orders));
                return state;
            });
    }
});

export const {addOrder, checkoutOrder, removeOrder, updateOrder} = OrderSlice.actions;
export default OrderSlice.reducer;