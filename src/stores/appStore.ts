import { configureStore } from '@reduxjs/toolkit';
import comparismCriteriaReducer from "./slices/comparismCriteriaSlice";
import aiModelsReducer from "./slices/aiModelsSlice";
import isLoadingReducer from "./slices/loadingSlice";
import { addModel, removeModel, selectAIModels } from './slices/aiModelsSlice';
import { add, remove, selectComparismCriteria } from './slices/comparismCriteriaSlice';
import { getIsLoading, toggleIsLoading, setIsLoading } from './slices/loadingSlice';

const appStore = configureStore({
  reducer: {
    comparismCriteria: comparismCriteriaReducer,
    aiModels: aiModelsReducer,
    isLoading: isLoadingReducer,
  },
});

export { 
  add, 
  addModel, 
  remove, 
  removeModel, 
  selectAIModels, 
  selectComparismCriteria, 
  getIsLoading, 
  toggleIsLoading,
  setIsLoading 
};

export default appStore;