import { RulerDimensionLine, MoveRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DEFAULT_LANGUAGE } from "../constands";
import { setLanguage, selectLanguage } from "../stores/appStore";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const location = useLocation();
  const isComparePage = location.pathname === "/compare";
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  const storeDispatcher = useDispatch();
  const appLanguage = useSelector((state: any) => state.language.language);
  const {i18n} = useTranslation();

  // Toggle dark class on <html> element
  useEffect(() => {
    const body = window.document.documentElement;
    if (isDarkTheme) {
      body?.classList.add("dark");
    } else {
      body?.classList.remove("dark");
    }
  }, [isDarkTheme]);

  // function to toggle the theme
  const toggleTheme = () =>
    setDarkTheme((prev) => {
      return !prev;
    });

  const handleLanguageChange = (event: SelectChangeEvent) => {
    storeDispatcher(setLanguage({data: event.target.value as string}));
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <header className="h-[90px] w-full flex justify-between items-center px-5 lg:px-20 py-6 transition-colors">
      <Link to="/">
        <RulerDimensionLine
          strokeWidth={1.5}
          className="text-yellow-600 lg:size-[48px] size-[38px]"
        />
      </Link>

      <span className="flex space-x-5 items-center">
        {!isComparePage && (
          <p className="text-sm space-x-3 text-slate-800 items-center underline hover:opacity-80 transition-all hidden lg:flex">
            <span>Change looks here</span>
            <MoveRight className="arrow block relative" strokeWidth={1.5} />
          </p>
        )}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="rounded-full p-2 flex justify-center items-center cursor-pointer transition-all"
        >
          {isDarkTheme ? (
            <Moon className="text-slate-800" strokeWidth={1.4} />
          ) : (
            <Sun className="text-amber-700" strokeWidth={1.4} />
          )}
        </button>

        <FormControl>
          <Select
            color="warning"
            labelId="demo-simple-select-label"
            id="demo-simple-select ."
            value={appLanguage}
            defaultValue={DEFAULT_LANGUAGE}
            onChange={handleLanguageChange}
          >
            <MenuItem value={"en"}>En</MenuItem>
            <MenuItem value={"fr"}>Fr</MenuItem>
          </Select>
        </FormControl>
      </span>
    </header>
  );
};

export default Header;
