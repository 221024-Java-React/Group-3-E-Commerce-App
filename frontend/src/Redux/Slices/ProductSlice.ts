import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Product } from "../../Types/Product";

interface ProductSliceState {
    products: Product[]
};


const initialState: ProductSliceState = {
    products: []
};

export const allProducts = createAsyncThunk(
    'products/allProducts',
    async() => {
        try{      
            const res = await axios.get("http://localhost:8500/products/");
            return {products: res.data};
        } catch(e) {  
            return null;      
        }
    }
);


export const productByCategory = createAsyncThunk(
    'products/productCategory',
    async(category:number, thunkAPI) => {
        try{      
            const res = await axios.get(`http://localhost:8500/products/${category}`);
            return {products: res.data};
        } catch(e) {  
            return null;      
        }
    }
);

export const addToCart = createAsyncThunk(
    'user/addToCart',
    async(product:Product, thunkAPI) => {
        try{
            
            const res = await axios.post("http://localhost:8500/products/cart", product);
            return res.data;
        } catch(e) {
            return thunkAPI.rejectWithValue('Unable to add this item to the cart');
        }
    }
);

export const ProductSlice = createSlice({
    //We need to name our slice
    name:"product",
    initialState,
    reducers: {
        addProduct: (state:ProductSliceState, action:PayloadAction<Product>) => {
            state.products = [...state.products, action.payload];
            return state;
        },

        updateProduct: (state:ProductSliceState, action:PayloadAction<number>) => {
            console.log("Enters update product slice");
            for(let i = 0; i<state.products.length; i++){
                let product = state.products[i];
                if(product.id === action.payload){
                    product.quantity = product.quantity;
                    state.products.splice(i, 1, product);
                }
            }
            console.log("state: " + state);
           
            return state; 
        },
        filterProducts:(state:ProductSliceState, action:PayloadAction<string>) => {
            state.products = state.products.filter((product:Product) => product.title.includes(action.payload) 
            || product.description.includes(action.payload));
            localStorage.setItem('products', JSON.stringify(state.products));
            return state;
        },
     
        removeProduct: (state:ProductSliceState, action:PayloadAction<number>) => {
            state.products = state.products.filter((product:Product) => product.id !== action.payload);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(allProducts.fulfilled, (state, action) => {
            state.products= action.payload?.products;
            localStorage.setItem('products', JSON.stringify(action.payload?.products));
            return state;
        });

        builder.addCase(allProducts.rejected, (state) => {
            state.products=[];
            return state
        });
        builder.addCase(productByCategory.fulfilled, (state,action) => {
            state.products= action.payload?.products;
            localStorage.setItem('products', JSON.stringify(action.payload?.products));
            return state;
        });
        builder.addCase(addToCart.fulfilled, (state,action) => {
           console.log("item added to the cart");
            return state;
        });
    }
});

export const {addProduct, updateProduct, removeProduct, filterProducts} = ProductSlice.actions;
export default ProductSlice.reducer;
