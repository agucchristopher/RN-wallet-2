import { Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { ActivityIndicator, Dimensions, LogBox, View } from "react-native";
import { useEffect } from "react";
export default () => {
  const [fontsLoaded] = useFonts({
    RBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    SRegular: require("../assets/fonts/Ubuntu-Medium.ttf"),
  });
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LottieView
          resizeMode="contain"
          autoPlay
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            justifyContent: "center",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/animation_lnlqmxc0.json")}
        />
      </View>
    );
  }
  return (
    <Stack
      screenOptions={{
        statusBarColor: "#121212",
        animationTypeForReplace: "pop",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="coinDetails"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};
