"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Darkmode, Lightmode } from "./icons";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      className="border border-zinc-300 rounded-full p-1 hover:bg-purple-500 hover:opacity-70  transition ease-in-out"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Lightmode /> : <Darkmode />}
    </button>
  );
}

export default ThemeSwitch;
