import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProfileResponse } from "../models/UserDetailsModel";

const profileInitialState: ProfileResponse = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    address: "",
    avatar: "",
    bvn: "",
    currency: "",
}

const profileSlice = createSlice({
    name: "profileResponse",
    initialState: profileInitialState,
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
        setAvatar: (state, action: PayloadAction<string>) =>{
            state.avatar = action.payload;
        },
        setBvn: (state, action: PayloadAction<string>) =>{
            state.bvn = action.payload;
        },
        setCurrency: (state, action: PayloadAction<string>) =>{
            state.currency = action.payload;
        },
        setProfileFields: (state, action: PayloadAction<ProfileResponse>) =>{
            // state = action.payload;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phoneNumber = action.payload.phoneNumber;
            state.gender = action.payload.gender;
            state.address = action.payload.address;
            state.avatar = action.payload.avatar;
            state.bvn = action.payload.bvn;
            state.currency = action.payload.currency;
        }
    }
});

export const { setAddress, setAvatar, setFirstName, setLastName, setCurrency, setGender, setBvn, setProfileFields, setPhoneNumber} = profileSlice.actions;
export default profileSlice;
