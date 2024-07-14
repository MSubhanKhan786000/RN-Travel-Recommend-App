import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import AppLoading from "expo-app-loading";
import { CreateTripContext } from "../Context/MyTripContext";
import React from "react";
import { useState } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "outfit-regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "firaSans-regular": require("../assets/fonts/FiraSans-Regular.ttf"),
    "firaSans-medium": require("../assets/fonts/FiraSans-Medium.ttf"),
    "firaSans-bold": require("../assets/fonts/FiraSans-Bold.ttf"),
  });

  const [tripData, setTripData] = useState([]);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
