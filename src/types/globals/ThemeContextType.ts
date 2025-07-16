type ThemeContextType = {
  toggleTheme: () => void;
  getCurrentTheme: () => 'light' | 'dark';
};
export default ThemeContextType;