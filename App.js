import { StyleSheet, View } from "react-native";
import { Profile } from "./src/components/Profile";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { ModalProvider } from "./src/components/NewReward/NewRewardModal/NewRewardModalContext";
import { useQuery } from "./src/hooks/useQuery";
import { useStyles } from "./src/hooks/useStyles";
import Constants from "expo-constants";

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

const AppContent = () => {
  const { backgroundColor } = useStyles();
  useQuery();

  return (
    <View style={[styles.container, backgroundColor]}>
      <Profile />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
});
