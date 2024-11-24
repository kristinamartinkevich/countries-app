import { useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { Button } from "@nextui-org/react";

import { useTheme } from "@/hooks/use-theme";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return <div className="w-6 h-6" />;

  const isLightTheme = theme === "light";

  return (
    <Button
      isIconOnly
      aria-label={isLightTheme ? "Switch to dark mode" : "Switch to light mode"}
      className={`px-2 py-1 transition-opacity hover:opacity-80 cursor-pointer rounded-lg`}
      onPress={toggleTheme}
    >
      {isLightTheme ? (
        <MoonFilledIcon aria-hidden="true" size={22} />
      ) : (
        <SunFilledIcon aria-hidden="true" size={22} />
      )}
      <VisuallyHidden>
        {isLightTheme ? "Dark Mode" : "Light Mode"}
      </VisuallyHidden>
    </Button>
  );
};
