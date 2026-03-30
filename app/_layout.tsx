import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { use, useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    FreePixel: require('../assets/fonts/FreePixel.ttf'),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (!fontsLoaded) {
      SplashScreen.hideAsync;
    }
  }, [fontsLoaded, error]);

  return <Stack />;
}
