import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserDetailsResponse, UsersMetaResponse } from "../models/UserDetailsModel";

const responseState:UsersMetaResponse = {
    createdAt: "",
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    lastActiveDate: "",
    accountBalance: "",
    accountNumber: "",
    id: "",
}

const usersMetaSlice = createSlice({
    name: "usersResponse",
    initialState: responseState,
    reducers: {
        setMetaFields: (state, action: PayloadAction<UsersMetaResponse>) =>{
            state.createdAt = action.payload.createdAt;
            state.orgName = action.payload.orgName;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.lastActiveDate = action.payload.lastActiveDate;
            state.accountNumber = action.payload.accountNumber;
            state.accountBalance = action.payload.accountBalance;
            state.id = action.payload.id;
        }
    }
});

export const { setMetaFields } = usersMetaSlice.actions;
export default usersMetaSlice;
