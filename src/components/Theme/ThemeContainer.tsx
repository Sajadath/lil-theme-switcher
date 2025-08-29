import { cookies } from "next/headers";
import ThemeButton from "./ThemeButton";

async function ThemeContainer() {
  const cookie = await cookies();
  const { value: theme } = cookie.get("theme") || { value: "light" };

  return (
    <div className="flex flex-col items-center overflow-x-hidden max-w-vw justify-center gap-3">
      <ThemeButton theme={theme} />
    </div>
  );
}

export default ThemeContainer;
