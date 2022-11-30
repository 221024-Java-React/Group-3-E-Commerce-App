import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { Person } from "../../Types/Person";

interface UserSliceState {
    loading: boolean;
    error: boolean;
    user?:Person;
}

export interface User {
    email:string;
    password:string;
}

const initialState: UserSliceState = {
    loading: false,
    error: false
};
export const login = createAsyncThunk(
    'user/login',
    async(user:User, thunkAPI) => {
        try{
            const res = await axios.post("http://localhost:8000/person/login", user);

            return({
                id: res.data.id,
                type: res.data.type,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                password: res.data.password,
                image: res.data.image,
                phone: res.data.phone,
                theme: res.data.theme,
                role: res.data.role
            });
        } catch(e) {
            return thunkAPI.rejectWithValue('Incorrect username or password');
        }
    }
);

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action)=> {
            state.loading = true;
            state.error = false;

            return state;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;

            localStorage.setItem("userid", `${state.user?.id}`);

            return state;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    }
});

export default UserSlice.reducer;