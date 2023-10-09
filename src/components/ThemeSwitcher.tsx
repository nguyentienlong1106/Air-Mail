"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setEnabled(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const newTheme = enabled ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  }, [mounted, enabled, setTheme]);

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
      } relative inline-flex h-[32px] w-[64px]  items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled
            ? "translate-x-5 lg:translate-x-6"
            : "translate-x-1 text-black"
        } h-[28px] w-[36px] transform rounded-full bg-white transition grid content-center`}
      >
        {theme === "light" ? (
          <Image
            src="/Sun.png"
            className="ml-2"
            alt=""
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/Moon.png"
            className="ml-2"
            alt=""
            width={20}
            height={20}
          />
        )}
      </span>
    </Switch>
  );
};

export default ThemeChanger;
