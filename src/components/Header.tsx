import { RulerDimensionLine, MoveRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { setLanguage, selectLanguage } from "../stores/appStore";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { themeContext } from "../themes/ThemeContextProvider";

const Header: React.FC = () => {
  const location = useLocation();
  const isComparePage = location.pathname === "/compare";
  const storeDispatcher = useDispatch();
  const { i18n, t } = useTranslation();
  const { toggleTheme, getCurrentTheme } = themeContext();

  // Toggle dark class on <html> element
  useEffect(() => {
    const body = window.document.documentElement;
    if (getCurrentTheme() === 'dark') {
      body?.classList.add("dark");
    } else {
      body?.classList.remove("dark");
    }
  }, [getCurrentTheme]);

  // function to toggle the theme
  // const toggleTheme = () =>
  //   setDarkTheme((prev) => {
  //     return !prev;
  //   });

  const handleLanguageChange = (event: SelectChangeEvent) => {
    storeDispatcher(setLanguage({ data: event.target.value as string }));
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

      <Box className="flex space-x-5 items-center">
        {!isComparePage && (
          <Typography variant="body2" className="space-x-3 items-center underline hover:opacity-80 transition-all hidden lg:flex">
            <Box>{t('customizeLooks')}</Box>
            <MoveRight className="arrow block relative" strokeWidth={1.5} />
          </Typography>
        )}

        <Button
          type="button"
          onClick={() => toggleTheme()}
          aria-label="Toggle Theme"
          className="rounded-full p-2 flex justify-center items-center cursor-pointer transition-all"
        >
          {getCurrentTheme() === 'light' ? (
            <Moon className="text-slate-800" strokeWidth={1.4} />
          ) : (
            <Sun className="text-white" strokeWidth={1.4} />
          )}
        </Button>

        <FormControl>
          <Select
            color="warning"
            labelId="language-select-label"
            id="language-select"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">En</MenuItem>
            <MenuItem value="fr">Fr</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};

export default Header;
