import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Profile } from "./src/components/Profile";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { ModalProvider } from "./src/components/NewReward/NewRewardModal/NewRewardModalContext";
import { useQuery } from "./src/hooks/useQuery";
import { useStyles } from "./src/hooks/useStyles";

const AppContent = () => {
  const { backgroundColor } = useStyles();
  useQuery();

  return (
    <SafeAreaView style={[styles.container, backgroundColor]}>
      <Profile></Profile>
      <StatusBar style='auto' />
    </SafeAreaView>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
