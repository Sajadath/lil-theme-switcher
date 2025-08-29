"use client";

import Cookies from "js-cookie";
import ThemeCircle from "./ThemeCircle";

function ThemeButton({ theme }: { theme: string }) {
  const activateDarkMode = () => {
    Cookies.set("theme", "dark");
    window.location.reload();
  };
  const activateLightMode = () => {
    Cookies.set("theme", "light");
    window.location.reload();
  };
  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          activateLightMode();
        } else {
          activateDarkMode();
        }
      }}
      className={`w-14 outline-none cursor-pointer transition-colors duration-500   relative   rounded-2xl h-8 ${
        theme === "dark" ? "bg-green-500" : "bg-gray-200"
      } `}
    >
      <ThemeCircle isDark={theme === "dark"} />
    </button>
  );
}

export default ThemeButton;
