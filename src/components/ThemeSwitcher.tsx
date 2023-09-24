"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTheme(enabled ? "light" : "dark");
    }
  }, [mounted, enabled]);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      id="changeMode"
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-gray-600" : "bg-gray-200"
      } relative inline-flex h-[32px] w-[64px] items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1 text-black"
        } h-[28px] w-[36px] transform rounded-full bg-white transition grid content-center`}
      >
        {theme}{" "}
      </span>
    </Switch>
  );
};

export default ThemeChanger;
