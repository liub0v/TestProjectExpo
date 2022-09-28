import React, { FC } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Feed } from "../../types";
import { INDENT } from "../../utils/constants";
import { dateParser } from "../../utils/helpers";

interface IFeedItem {
  item: Feed;
}

export const FeedItem: FC<IFeedItem> = ({ item }) => {
  return <FeedItemContent item={item} />;
};

const FeedItemContent: FC<IFeedItem> = ({ item }) => {
  const { textColor, tileBackgroundColor } = useStyles();
  const infoString = `${item.user.firstName} ${item.user.lastName} rewarded by ${item.author.firstName} ${item.author.lastName}`;

  return (
    <View style={[styles.container, tileBackgroundColor]}>
      <View style={styles.dateTitleWrapper}>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={[styles.dateTitle, textColor]}
        >
          {dateParser(item.created)}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={{ uri: item.user.imageUrl }} />
        </View>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={4}
          style={[styles.messageText, textColor]}
        >
          {item.message}
        </Text>
      </View>
      <View style={styles.infoTitleWrapper}>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={[styles.infoTitle, textColor]}
        >
          {infoString}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: INDENT.L,
    padding: INDENT.M,
    marginVertical: INDENT.S,
  },
  avatar: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 25,
  },
  avatarWrapper: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: INDENT.XL,
  },
  infoTitleWrapper: {
    borderRadius: INDENT.S,
    justifyContent: "center",
    alignItems: "center",
    marginTop: INDENT.M,
  },
  dateTitleWrapper: {
    alignItems: "flex-end",
  },
  infoTitle: {
    fontWeight: "300",
    opacity: 0.6,
    paddingVertical: INDENT.S / 2,
  },
  dateTitle: {
    opacity: 0.6,
  },
  messageText: {
    flex: 4,
    maxWidth: "70%",
    fontWeight: "900",
    marginHorizontal: INDENT.XL,
  },
});
