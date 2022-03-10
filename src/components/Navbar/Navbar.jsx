import React, { useEffect, useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
function Navbar() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const changeMode = function () {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.theme = newMode;
    setMode(newMode);
  };
  return (
    <div className="shadow bg-white-full dark:bg-darkBlue-el">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <h1 className="text-xl font-semibold dark:text-white-full">
          <Link to="/">Where in the world?</Link>
        </h1>
        <div
          className="flex items-center text-sm rounded-sm transition cursor-pointer p-1 "
          onClick={changeMode}
        >
          <IconContext.Provider value={{ className: "w-4 h-4  dark:text-white-full" }}>
            {mode === "light" ? <BsMoon /> : <BsMoonFill />}
          </IconContext.Provider>

          <span className="ml-1 dark:text-white-full ">
            {mode === "light" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
