import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SocialsResponse } from "../models/UserDetailsModel";

const socialState: SocialsResponse = {
    facebook : "",
    instagram: "",
    twitter: "",
}

const socialSlice = createSlice({
    name: "socials",
    initialState: socialState,
    reducers: {
        setFacebook: (state, action: PayloadAction<string>) =>{
            state.facebook = action.payload;
        },
        setTwitter: (state, action: PayloadAction<string>) =>{
            state.twitter = action.payload;
        },
        setInstagram: (state, action: PayloadAction<string>) =>{
            state.instagram = action.payload;
        },
        setSocialFields: (state, action: PayloadAction<SocialsResponse>) =>{
            state.facebook = action.payload.facebook;
            state.twitter = action.payload.twitter;
            state.instagram = action.payload.instagram;
        }
    }
});

export const { setSocialFields, setFacebook, setInstagram, setTwitter } = socialSlice.actions;
export default socialSlice;
