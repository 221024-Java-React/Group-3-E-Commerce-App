import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Person, Role, Theme } from "../../Types/Person";


interface AuthState{
    isLoggedIn:boolean,
    isRegistered: boolean
    error: boolean,
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
const initialState:AuthState =  { isLoggedIn: false, isRegistered:false,error:false, currentUser:person };
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
export const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("user");
            state.error = false;
            state.isLoggedIn=false;
            state.isRegistered=true;
            state.currentUser=person;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.error=false;
            state.currentUser= action.payload.user;
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            console.log("useruseruser "+JSON.stringify(localStorage.getItem('user')));
            return state;
        });
        builder.addCase(register.fulfilled, (state,action) => {
            state.isRegistered = true;
            state.currentUser=action.payload.user;
            return state
        });
        builder.addCase(login.rejected, (state) => {
            state.error = true;
            state.isLoggedIn=false;
            state.currentUser=person;
            return state
        });
   
    }
});
export const {logout}= UserSlice.actions;
export default UserSlice.reducer;