import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Category, Product } from "../../Types/Product";

interface ProductState {
    currentProduct: Product;
}

const cat :Category={
    productCategoryId: 0,
    category: ""
}

const p:Product={
    id: 0,
    title: "",
    price: 0,
    quantity: 0,
    description: "",
    category:cat
};

const initialState:ProductState =  {  currentProduct: p };

export const addProduct = createAsyncThunk(
    'admin/addProduct',
    async(product:Product, thunkAPI) => {
        try{
            
            const res = await axios.post("http://localhost:8500/products/create", product);
            console.log(res.data);
            return {product:res.data};
        } catch(e) {
            return thunkAPI.rejectWithValue('Product Already Exist');
        }
    }
);


export const AdminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, action) => {      
          //  initialState.currentProduct = action.payload.product;
            localStorage.setItem('adminProducts', JSON.stringify(action.payload.product));
            return state;
        });

      
    }
});

export default AdminSlice.reducer;