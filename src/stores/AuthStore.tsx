import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface loginState {
    email: string;
    password: string;
}

const initialState: loginState = {
    email: "",
    password: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) =>{
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) =>{
            state.password = action.payload;
        },
    }
});

export const { setEmail, setPassword } = authSlice.actions;
export default authSlice;