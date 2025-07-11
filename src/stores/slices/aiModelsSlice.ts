import { createSlice } from "@reduxjs/toolkit";
import { AIModelItemType, AIModelState } from "../../types";

const aiModelsSlice = createSlice({
    name: 'aiModelsCounter',
    initialState: {
        aiModels: [] as AIModelItemType[]
    },
    reducers: {
        add: (state: AIModelState, action: { payload: { data: AIModelItemType } }) => {
            state.aiModels.push(action.payload.data)
        },
        remove: (state: AIModelState, action: { payload: { id: string } }) => {
            state.aiModels = state.aiModels.filter((value: AIModelItemType) => value.id !== action.payload.id)
        }

    },
    selectors: {
        selectAIModels: (state: AIModelState) => state.aiModels,
    }
});

export const { add, remove } = aiModelsSlice.actions;
export const { selectAIModels } = aiModelsSlice.selectors;
export default aiModelsSlice.reducer;