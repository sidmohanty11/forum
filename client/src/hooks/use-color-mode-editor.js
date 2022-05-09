import { useEffect } from "react";

export const useColorModeEditor = () => {
  useEffect(() => {
    const colorScheme = localStorage.getItem("chakra-ui-color-mode");

    if (colorScheme === "dark") {
      document.documentElement.setAttribute("data-color-mode", "dark");
    } else {
      document.documentElement.setAttribute("data-color-mode", "light");
    }
  }, []);
};
