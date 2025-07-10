import { configureStore } from '@reduxjs/toolkit';
import comparismCriteriaReducer from "./comparismCriteriaSlice";

const appStore = configureStore({
  reducer: {
    comparismCriteria: comparismCriteriaReducer
  },
});

export { appStore };