import { createSlice } from "@reduxjs/toolkit";
import { fetchById, fetchCampers } from "./camperOperations";

const handlePending = (state) => { 
    state.isLoading = true;
    state.isError = false;
};

const handleRejected = (state) => { 
    state.isLoading = false;
    state.isError = true;
};

const camperSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        isLoading: false,
        isError: null,
        camper: null,
        currentPage: 1,
        totalItems: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (buider) => {
        buider
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                if (state.currentPage === 1) state.items = [];
                state.items = [...state.items, ...action.payload.items];
                state.totalItems = action.payload.total;
                state.isLoading = false;
            })
            .addCase(fetchCampers.rejected, handleRejected)
        
            .addCase(fetchById.pending, handlePending)
            .addCase(fetchById.fulfilled, (state, action) => {
                state.camper = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchById.rejected, handleRejected);
    },
});

export const { setPage } = camperSlice.actions;
export default camperSlice.reducer;