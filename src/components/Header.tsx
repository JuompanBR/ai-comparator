import { RulerDimensionLine, MoveRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const location = useLocation();
  const isComparePage = location.pathname === "/compare";
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

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
            <span>Change themes here</span>
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
      </span>
    </header>
  );
};

export default Header;
