import { configureStore } from '@reduxjs/toolkit';
import comparismCriteriaReducer from "./slices/comparismCriteriaSlice";
import aiModelsReducer from "./slices/aiModelsSlice";

const appStore = configureStore({
  reducer: {
    comparismCriteria: comparismCriteriaReducer,
    aiModels: aiModelsReducer
  },
});

export default appStore;