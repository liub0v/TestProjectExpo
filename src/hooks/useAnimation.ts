import {
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  scrollTo,
} from "react-native-reanimated";
import { DEVICE_WIDTH, INDENT } from "../utils/constants";

export const useAnimation = () => {
  const sharedValue = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();
  const offset = (DEVICE_WIDTH - (INDENT.M + INDENT.M) * 2) / 2;

  useDerivedValue(() => {
    scrollTo(
      scrollViewRef,
      sharedValue.value * (DEVICE_WIDTH - (INDENT.M + INDENT.M) * 2),
      0,
      true
    );
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(sharedValue.value * offset, {
            damping: 60,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return { sharedValue, animatedStyles, ref: scrollViewRef };
};
