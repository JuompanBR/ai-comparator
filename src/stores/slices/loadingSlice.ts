import { createSlice } from "@reduxjs/toolkit";
import { LoadingSliceState } from "../../types";

const loadingSlice = createSlice({
    name: "isLoading",
    initialState: {
        isLoading: false
    },
    reducers: {
        toggleIsLoading: (state: LoadingSliceState) => {
            state.isLoading = !state.isLoading;
        },
        setIsLoading: (state: LoadingSliceState, action: { payload: { data: boolean }}) => {
            state.isLoading = action.payload.data;
        }
    },
    selectors: {
        getIsLoading: (state: LoadingSliceState)=> state.isLoading
    }
});

export const { toggleIsLoading, setIsLoading } = loadingSlice.actions;
export const { getIsLoading } = loadingSlice.selectors;
export default loadingSlice.reducer;