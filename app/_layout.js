import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
export default () => {
  const [fontsLoaded] = useFonts({
    RBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RRegular: require("../assets/fonts/Raleway-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
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
