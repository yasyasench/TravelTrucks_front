import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        location: "",
        vehicleType: "",
        vehicleEquipment: {
            AC: false,
            TV: false,
            Bathroom: false,
            Kitchen: false,
            Automatic: false,
        },
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setVehicleType: (state, action) => {
            state.vehicleType = action.payload;
        },
        toggleEquipment: (state, action) => {
            const equipment = action.payload;
            state.vehicleEquipment[equipment] = !state.vehicleEquipment[equipment];
        },
    },
});

export const { setLocation, setVehicleType, toggleEquipment } =
    filterSlice.actions;
export default filterSlice.reducer;