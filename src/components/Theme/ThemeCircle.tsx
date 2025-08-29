"use client";

function DarkModeCircle({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={` rounded-full absolute bg-gray-50 shadow-black/50 shadow-xs border border-white transition-colors duration-300  top-1/2  -translate-y-1/2  h-6 w-6 ${
        isDark ? "right-1   " : "left-1   "
      }`}
    ></div>
  );
}

export default DarkModeCircle;
