import { useEffect, useState } from "react";
import Button from "../UI/Button";

export default function SwitchTheme() {
  // if theme is undefined then theme using light theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const localTheme = localStorage.getItem("theme");
    const htmlClass = document.documentElement.classList;

    htmlClass.add(localTheme);
    htmlClass.remove(localTheme === "light" ? "dark" : "light");
  }, [theme]);

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex absolute right-0 top-0 bottom-0 text-lg md:text-3xl cursor-pointer">
      <Button type={"button"} onClick={switchTheme}>
        <i className={`bx bx-${theme === "light" ? "sun" : "moon"}`}></i>
      </Button>
    </div>
  );
}
