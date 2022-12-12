import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Person, Address, Role, Theme } from "../../Types/Person";

export interface AuthState{
    isLoggedIn:boolean,
    isRegistered:boolean,
    registeredError: boolean,
    loginError: boolean,
    currentUser: Person
}
export interface User {
    name?:string,
    email:string;
    password:string;
};
const  personRole:Role = {
    roleId: 0,
    role: ""
}

const personTheme:Theme= {
    themeId: 0,
    theme: ""
}

const person:Person={
    customerId: 0,
    name:"",
    email: "",
    password: "",
    phone: "",
    image: "",
    theme: personTheme,
    role: personRole,
    orders:[]
};
const initialState:AuthState =  {
    isLoggedIn: false, registeredError: false, loginError: false, currentUser: person,
    isRegistered: false
};
export const register = createAsyncThunk(
    'user/register',
    async(user:User, thunkAPI) => {
        try{
            
            const res = await axios.post("http://localhost:8500/persons/register", user);
            return res.data;
        } catch(e) {
            return thunkAPI.rejectWithValue('Email Already Exist');
        }
    }
);
export const login = createAsyncThunk(
    'user/login',
    async(user:User, thunkAPI) => {
        try{    
            const res = await axios.post("http://localhost:8500/persons/login", user);
            console.log("login slice res data "+res.data);
           return {user: res.data};
         
        } catch(e) {
            return thunkAPI.rejectWithValue('Incorrect username or password');
        }
    }
);
export const updateAddress = createAsyncThunk(
    'orders/updateAddress',
    async(PAddress:Address, thunkAPI) => {
        try{console.log("in slice PAddress: " + PAddress.city);
            const res = await axios.post("http://localhost:8500/persons/update/address", PAddress);
            console.log(res.data);
            return{user: res.data};
        } catch(e) {
            return null;
        }
    }
);
export const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.clear();
            //const rootState = useSelector((state:RootState) => state);

            state.loginError = false;
            state.isLoggedIn=false;
            state.loginError=false;
            state.currentUser=person;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.loginError=false;
            state.currentUser= action.payload.user;
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            console.log("useruseruser "+JSON.stringify(localStorage.getItem('user')));
            return state;
        });
        builder.addCase(register.fulfilled, (state,action) => {
            state.isRegistered=true;
            state.registeredError=false;
            state.currentUser=action.payload.user;
            return state
        });
        builder.addCase(register.rejected, (state,action) => {
            console.log("inside login rejected")
            state.registeredError=true;
            state.isRegistered=false;
           
            return state
        });
        builder.addCase(login.rejected, (state) => {
            state.loginError = true;
            state.isLoggedIn=false;
            state.currentUser=person;
            return state
        });
        builder.addCase(updateAddress.fulfilled, (state, action) => {
            return state;
        });
    }
});
export const {logout}= UserSlice.actions;
export default UserSlice.reducer;