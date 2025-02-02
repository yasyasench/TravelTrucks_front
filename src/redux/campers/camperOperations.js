import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Limit = 4;
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async (searchParms, thukApi) => {
        const { page, location, form, equipment, transmission } = searchParms;
        try {
            const response = await axios.get("/campers", {
                params: {
                    ...equipment,
                    transmission: transmission,
                    form: form,
                    location: location,
                    page: page,
                    limit: Limit,
                },
            });
            return response.data;
        } catch (error) {
            return thukApi.rejectWithValue(error.message);
        }
    }
);

export const fetchById = createAsyncThunk(
    "campers/fetchId",
    async (id, thunkApi) => {
        try {
            const response = await axios.get("/campers/${id}");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
