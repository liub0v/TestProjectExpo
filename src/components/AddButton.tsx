import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "../hooks/useTheme";
import { INDENT, PLUS_ICON, PLUS_ICON_DARK } from "../utils/constants";

export const AddButton = ({ onPress }) => {
  const { isDarkMode } = useTheme();
  return (
    <View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          style={styles.button}
          source={{
            uri: isDarkMode ? PLUS_ICON_DARK : PLUS_ICON,
          }}
        ></Image>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: INDENT.L,
    height: "10%",
    marginVertical: INDENT.S,
    marginHorizontal: INDENT.M,
  },
  button: {
    height: "50%",
    aspectRatio: 1,
    marginRight: INDENT.XL,
  },
});
