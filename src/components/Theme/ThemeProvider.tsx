import { cookies } from "next/headers";
import { type ReactNode } from "react";

async function ThemeProvider({ children }: { children: ReactNode }) {
  const cookie = await cookies();

  const { value: theme } = cookie.get("theme") || { value: "light" };

  return (
    <body className={` antialiased transition-colors duration-500 ${theme}`}>
      {children}
    </body>
  );
}

export default ThemeProvider;
