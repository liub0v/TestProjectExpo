import { FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import { useAnimation } from "../../hooks/useAnimation";
import { useData } from "../../hooks/useData";
import { useStyles } from "../../hooks/useStyles";
import { useUser } from "../../hooks/useUser";
import { DEVICE_WIDTH, INDENT, PRIMARY } from "../../utils/constants";
import { FeedItem } from "./FeedItem";

export const Feeds: FC = () => {
  const { myRewards } = useUser();
  const { feeds } = useData();
  const { textColor } = useStyles();
  const { sharedValue, animatedStyles, ref } = useAnimation();

  const onPressFeeds = () => {
    sharedValue.value = 0;
  };
  const onPressRewards = () => {
    sharedValue.value = 1;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTabContainer}>
        <View style={styles.headerTabWrapper}>
          <TouchableWithoutFeedback onPress={onPressFeeds}>
            <View style={styles.headerTab}>
              <Text style={[textColor, styles.tabTitle]}> FEEDS</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPressRewards}>
            <View style={styles.headerTab}>
              <Text style={[textColor, styles.tabTitle]}> MY REWARDS</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View style={[styles.border, animatedStyles]} />
      </View>
      <ScrollView
        ref={ref}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          initialNumToRender={3}
          showsVerticalScrollIndicator={false}
          style={styles.listWrapper}
          data={feeds}
          renderItem={FeedItem}
          keyExtractor={(item) => item.id}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listWrapper}
          data={myRewards}
          renderItem={FeedItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: INDENT.M,
    borderRadius: INDENT.L,
    paddingHorizontal: INDENT.M,
    flex: 4,
  },
  headerTabContainer: {
    flexDirection: "column",
  },
  headerTabWrapper: {
    flexDirection: "row",
  },
  headerTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitle: {
    fontSize: INDENT.L,
    fontWeight: "300",
  },
  border: {
    width: "50%",
    height: INDENT.S / 2,
    backgroundColor: PRIMARY,
    marginVertical: INDENT.S,
    borderRadius: INDENT.S,
  },
  listWrapper: {
    width: DEVICE_WIDTH - (INDENT.M + INDENT.M) * 2,
  },
});
