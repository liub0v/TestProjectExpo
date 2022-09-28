import { FC, ReactElement } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useStyles } from "../hooks/useStyles";
import { useTheme } from "../hooks/useTheme";
import { INDENT, PLUS_ICON, PLUS_ICON_DARK } from "../utils/constants";

interface IAddButton {
  onPress: () => void;
}

export const AddButton: FC<IAddButton> = ({ onPress }): ReactElement => {
  const { isDarkMode } = useTheme();
  const { backgroundColor } = useStyles();
  return (
    <View style={[styles.container, backgroundColor]}>
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
    position: "absolute",
    height: "9%",
    aspectRatio: 1,
    borderRadius: 50,
    bottom: INDENT.XL,
    right: INDENT.XXL,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "50%",
    aspectRatio: 1,
  },
});
