import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GuarantorResponse } from "../models/UserDetailsModel";

const guarantorState: GuarantorResponse = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    address: "",
}

const guarantorSlice = createSlice({
    name: "guarantor",
    initialState: guarantorState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) =>{
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) =>{
            state.lastName = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) =>{
            state.phoneNumber = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) =>{
            state.gender = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) =>{
            state.address = action.payload;
        },
        setGuarantorFields: (state, action: PayloadAction<GuarantorResponse>) =>{
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phoneNumber = action.payload.phoneNumber;
            state.gender = action.payload.gender;
            state.address = action.payload.address;
        }
    }
});

export const { setAddress, setFirstName, setLastName, setGender, setGuarantorFields, setPhoneNumber} = guarantorSlice.actions;
export default guarantorSlice;