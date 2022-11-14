import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthStore";
import educationSlice from "./educationStore";
import guarantorSlice from "./guarantorStore";
import profileSlice from "./profileStore";
import socialSlice from "./socialsStores";
import usersMetaSlice from "./usersStore";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        profile: profileSlice.reducer,
        social: socialSlice.reducer,
        education: educationSlice.reducer,
        guarantor: guarantorSlice.reducer,
        usersMeta: usersMetaSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
