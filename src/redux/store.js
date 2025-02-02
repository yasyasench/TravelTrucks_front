import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/camperSlice";
import filterReducer from "./filters/filtersSlice";
export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filter: filterReducer,
    },
});