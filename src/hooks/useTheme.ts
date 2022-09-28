import { useColorScheme } from "react-native";

export const useTheme = () => {
  const systemTheme = useColorScheme();
  const isDarkMode = systemTheme === "dark";

  return { isDarkMode };
};
