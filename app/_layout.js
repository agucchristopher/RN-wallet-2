import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { ActivityIndicator } from "react-native";
export default () => {
  const [fontsLoaded] = useFonts({
    RBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    SRegular: require("../assets/fonts/Ubuntu-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/animation_lnlqmxc0.json")}
      />
    );
  }
  return (
    <Stack
      screenOptions={{
        statusBarColor: "#121212",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};
