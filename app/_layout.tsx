import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import "@/global.css";

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "freepixel": require("@/assets/fonts/FreePixel.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    return <Stack />;
}