import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "./habitSlice";

const store = configureStore({
    reducer: {
        habitStore: habitReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;