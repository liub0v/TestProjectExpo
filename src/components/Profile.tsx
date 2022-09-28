import { StyleSheet, View } from "react-native";
import { Feeds } from "./Feed/Feeds";
import { AddButton } from "./AddButton";
import { useNewRewardModal } from "./NewReward/NewRewardModal/hooks";
import { ProfileDetails } from "./ProfileDetails";
import { FC } from "react";

export const Profile: FC = () => {
  const modal = useNewRewardModal();

  const onPress = () => {
    modal.show();
  };

  return (
    <View style={styles.container}>
      <ProfileDetails />
      <Feeds></Feeds>
      <AddButton onPress={onPress}></AddButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
