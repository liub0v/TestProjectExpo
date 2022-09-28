import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
  TILE_BACKGROUND_COLOR,
  TILE_BACKGROUND_COLOR_DARK,
} from "../utils/constants";
import { useTheme } from "./useTheme";

export const useStyles = () => {
  const { isDarkMode } = useTheme();
  const tileBackgroundColor = {
    backgroundColor: isDarkMode
      ? TILE_BACKGROUND_COLOR_DARK
      : TILE_BACKGROUND_COLOR,
  };
  const backgroundColor = {
    backgroundColor: isDarkMode ? BACKGROUND_COLOR_DARK : BACKGROUND_COLOR,
  };
  const textColor = {
    color: isDarkMode ? PRIMARY_TEXT_COLOR_DARK : PRIMARY_TEXT_COLOR,
  };
  return { textColor, tileBackgroundColor, backgroundColor };
};
