import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { Receipt } from "../../Types/Receipt";

interface ReceiptSliceState {
    receipts: Receipt[]
};


const initialState: ReceiptSliceState = {
    receipts: []
};


export const makeReceipt = createAsyncThunk(
    'receipts/makeReceipt',
    async(receipt:Receipt, thunkAPI) => {
        try{console.log("in slice receipt: " + receipt.total_items);

            const res = await axios.post("http://localhost:8500/receipts/make/", receipt);
            console.log(res.data);
            return {receipts :res.data};

        } catch(e) {
            return thunkAPI.rejectWithValue('');
        }
    }
);

export const getAllReceipts = createAsyncThunk(
    'receipts/getAllReceipts',
    async()=> {
        try{
            const res = await axios.get("http://localhost:8500/receipts/")
            return {receipts: res.data}
        }catch(e){
            return null;
        }
    }
)

//Create our slice and map our reducers
export const ReceiptSlice = createSlice({
    //we need to name our slice
    name: "receipt",
    initialState,
    reducers: {
    },
        extraReducers: (builder) => {
            builder.addCase(makeReceipt.fulfilled, (state, action) => {
                  // console.log("orders inside create order response "+action.payload.orders);
                //localStorage.setItem('orders', JSON.stringify(action.payload.orders));
                return state;
            });
            builder.addCase(getAllReceipts.fulfilled, (state, action) => {
                state.receipts= action.payload?.receipts;
                //localStorage.setItem('receipts', JSON.stringify(action.payload?.receipts));
                return state;
            });
            
    }
});
export const {} = ReceiptSlice.actions;
export default ReceiptSlice.reducer;
