import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



export interface User {
    name?:string,
    email:string;
    password:string;
}

const initialState =  { isLoggedIn: false, error:false, currentUser: null };

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
           return {user: res.data};
        } catch(e) {
            return thunkAPI.rejectWithValue('Incorrect username or password');
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
     localStorage.removeItem("user");
  });

export const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.error=false;
            state.currentUser= action.payload.user;
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            return state;
        });

        builder.addCase(login.rejected, (state) => {
            state.error = true;
            state.isLoggedIn=false;
            state.currentUser=null;
            return state
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.error = false;
            state.isLoggedIn=false;
            state.currentUser=null;
            return state
        });
    }
});

export default UserSlice.reducer;