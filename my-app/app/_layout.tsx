import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import AppLoading from "expo-app-loading";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "outfit-regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "firaSans-regular": require("../assets/fonts/FiraSans-Regular.ttf"),
    "firaSans-medium": require("../assets/fonts/FiraSans-Medium.ttf"),
    "firaSans-bold": require("../assets/fonts/FiraSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
