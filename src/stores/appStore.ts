import { configureStore } from '@reduxjs/toolkit';
import comparismCriteriaReducer from "./slices/comparismCriteriaSlice";

const appStore = configureStore({
  reducer: {
    comparismCriteria: comparismCriteriaReducer
  },
});

export { appStore };