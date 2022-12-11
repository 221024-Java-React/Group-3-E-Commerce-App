import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Person, Role, Theme } from "../../Types/Person";


interface ProfileState {
    currentProfile: Person;
}


const r :Role={
    roleId: 0,
    role: ""
}

const t :Theme={
    themeId: 0,
    theme: ""
}

const p:Person={
    customerId: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    image: "",
    theme: t,
    role: r,
    orders: [],
    
};

const initialState:ProfileState =  {  currentProfile: p };


export const updateProfile = createAsyncThunk(
    'admin/updateProduct',
    async(person:Person, thunkAPI) => {
        try{
            
            const res = await axios.put("http://localhost:8500/persons/profile", person);
            console.log(res.data);
            return {product:res.data};
        } catch(e) {
            return thunkAPI.rejectWithValue('Profile could not be updated');
        }
    }
);


export const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(updateProfile.fulfilled, (state, action) => {      
            //  initialState.currentProduct = action.payload.product;
              localStorage.setItem('profilePerson', JSON.stringify(action.payload.product));
              return state;
        });

      
    }
});

export default ProfileSlice.reducer;