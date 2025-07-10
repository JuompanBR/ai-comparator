import { createSlice } from "@reduxjs/toolkit";
import { ComparismCriteriaItem, ComparismCriteriaState } from "../types/comparismCriteriaItem";

const comparismCriteriaSlice = createSlice({
    name: 'comparismCounter',
    initialState: {
        comparismCriteria: [] as ComparismCriteriaItem[]
    },
    reducers: {
        add: (state: ComparismCriteriaState, action: { payload: { data: ComparismCriteriaItem } }) => {
            state.comparismCriteria.push(action.payload.data)
        },
        remove: (state: ComparismCriteriaState, action: { payload: { id: string } }) => {
            state.comparismCriteria = state.comparismCriteria.filter((value: ComparismCriteriaItem) => value.id != action.payload.id)
        }

    },
    selectors: {
        selectComparismCriteria: (state: ComparismCriteriaState) => state.comparismCriteria,
    }
});

export const { add, remove } = comparismCriteriaSlice.actions;
export const { selectComparismCriteria } = comparismCriteriaSlice.selectors;
export default comparismCriteriaSlice.reducer;