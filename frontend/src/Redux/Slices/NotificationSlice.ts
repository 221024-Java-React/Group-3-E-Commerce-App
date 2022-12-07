import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface NotificationSliceState {
    notification: Notification[]
};


const initialState: NotificationSliceState = {
    notification: []
};

export const getNotifications = createAsyncThunk(
    'notifications/getAll',
    async(customer_id:number) => {
        try{      
            const res = await axios.get(`http://localhost:8500/notifications/${customer_id}`);
            console.log(res.data);
            return {notification: res.data};
           
        } catch(e) {  
            return null;      
        }
    }
);


export const NotificationSlice = createSlice({
    //We need to name our slice
    name:"notification",
    initialState,
    reducers: {
        
        getAllNotifications: (state:NotificationSliceState, action:PayloadAction<number>) => {
    
           
           // return state; 
        },
     
        removeProduct: (state:NotificationSliceState, action:PayloadAction<number>) => {
          //  state.products = state.products.filter((product:Product) => product.id !== action.payload);
            return state;
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(getNotifications.fulfilled, (state, action) => {
            state.notification= action.payload?.notification;
            localStorage.setItem('notifications', JSON.stringify(action.payload?.notification));
            return state;
        });
    }
});

export default NotificationSlice.reducer;
