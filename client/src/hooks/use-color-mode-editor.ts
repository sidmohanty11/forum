import { useEffect } from "react";

export const useColorModeEditor = () => {
  const colorScheme = localStorage.getItem("chakra-ui-color-mode");
  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.setAttribute("data-color-mode", "dark");
    } else {
      document.documentElement.setAttribute("data-color-mode", "light");
    }
  }, [colorScheme]);
};
