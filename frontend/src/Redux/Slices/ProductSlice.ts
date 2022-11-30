import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Product } from "../../Types/Product";

interface ProductSliceState {
    products: Product[]
};

const initialState: ProductSliceState = {
    products: []
};

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
            for(let i = 0; i<state.products.length; i++){
                let product = state.products[i];
                if(product.id === action.payload){
                    product.quantity = product.quantity;
                    state.products.splice(i, 1, product);
                }
            }
           
            return state; 
        },

        removeProduct: (state:ProductSliceState, action:PayloadAction<number>) => {
            state.products = state.products.filter((product:Product) => product.id !== action.payload);
            return state;
        }
    }
});

export const {addProduct, updateProduct, removeProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
