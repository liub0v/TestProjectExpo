import { FC, ReactElement } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useStyles } from "../hooks/useStyles";
import { useUser } from "../hooks/useUser";
import { INDENT, PRIMARY } from "../utils/constants";

export const ProfileDetails: FC = (): ReactElement => {
  const { user } = useUser();
  const { textColor, tileBackgroundColor } = useStyles();

  return (
    <View style={styles.container}>
      <View style={[styles.userWrapper, tileBackgroundColor]}>
        <Image source={{ uri: user?.imageUrl }} style={styles.avatar}></Image>
        <Text adjustsFontSizeToFit style={[textColor, styles.nameTitle]}>
          {`${user?.firstName} ${user?.lastName}`.toUpperCase()}
        </Text>
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.tileItemWrapper}>
          <Text
            adjustsFontSizeToFit
            style={[textColor, styles.tileTitleMiddle]}
          >
            GIVEN
          </Text>
          <Text adjustsFontSizeToFit style={[textColor, styles.numberTitle]}>
            {`${user?.givenValue}$`}
          </Text>
        </View>
        <View style={styles.tileItemWrapper}>
          <Text
            adjustsFontSizeToFit
            style={[textColor, styles.tileTitleMiddle]}
          >
            RECIEVED
          </Text>
          <Text adjustsFontSizeToFit style={[textColor, styles.numberTitle]}>
            {`${user?.recievedValue}$`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    borderRadius: INDENT.L,
    margin: INDENT.M,
    marginBottom: INDENT.M,
  },
  userWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: INDENT.M,
    marginHorizontal: INDENT.S,
    borderRadius: INDENT.L,
    paddingVertical: INDENT.S,
  },
  infoWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tileItemWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: INDENT.L,
    marginHorizontal: INDENT.S,
    padding: INDENT.M,
    backgroundColor: PRIMARY,
  },
  avatar: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 30,
  },
  nameTitle: {
    fontSize: INDENT.XL,
    fontWeight: "200",
  },
  numberTitle: {
    fontSize: INDENT.XL,
    fontWeight: "900",
  },
  tileTitleMiddle: {
    fontSize: INDENT.M,
    fontWeight: "300",
  },
});
