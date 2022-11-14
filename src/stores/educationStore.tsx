import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EducationResponse } from "../models/UserDetailsModel";

const educationState: EducationResponse = {
    level: "",
    employmentStatus: "",
    sector: "",
    duration: "",
    officeEmail: "",
    monthlyIncome: [],
    loanRepayment: ""
}

const educationSlice = createSlice({
    name: "education",
    initialState: educationState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) =>{
            state.level = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) =>{
            state.employmentStatus = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) =>{
            state.sector = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) =>{
            state.duration = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) =>{
            state.officeEmail = action.payload;
        },
        setMonthlyIncome: (state, action: PayloadAction<string>) =>{
            state.monthlyIncome.push(action.payload);
        },
        setLoanRepayment: (state, action: PayloadAction<string>) =>{
            state.loanRepayment = action.payload;
        },
        setEducationFields: (state, action: PayloadAction<EducationResponse>) =>{
            state.level = action.payload.level;
            state.employmentStatus = action.payload.employmentStatus;
            state.sector = action.payload.sector;
            state.duration = action.payload.duration;
            state.officeEmail = action.payload.officeEmail;
        }
    }
});

export const { setEducationFields } = educationSlice.actions;
export default educationSlice;
