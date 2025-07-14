import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LANGUAGE } from "../../constands";
import { LanguageSettingsState } from "../../types";

const languageSettingsSlice = createSlice({
    name: "languageSettings",
    initialState: {
        language: DEFAULT_LANGUAGE
    },
    reducers: {
        setLanguage: (state: LanguageSettingsState, action: { payload: { data: string } }) => {
            state.language = action.payload.data;
        }
    },
    selectors: {
        selectLanguage: (state: LanguageSettingsState) => state.language
    }
});

export const { setLanguage } = languageSettingsSlice.actions;
export const { selectLanguage } = languageSettingsSlice.selectors;
export default languageSettingsSlice.reducer;