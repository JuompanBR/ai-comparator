import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeContextType } from '../types';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    text: {primary: '#1d293d'},
    secondary: { main: '#9c27b0' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {default: "hsl(210, 14%, 7%)"},
    primary: { main: '#90caf9' },
    text: {primary: "#ccc"},
    secondary: { main: '#ce93d8' },
  },
});

const ThemeToggleContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  getCurrentTheme: () => 'light',
});

const themeContext = () => useContext(ThemeToggleContext);
const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = (): void => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const getCurrentTheme = (): 'light' | 'dark' => {
    return mode;
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, getCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export {themeContext, ThemeContextProvider};