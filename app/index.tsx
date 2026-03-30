import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white text-xs">
      <Image source= {images.avatar} className="!w-72 !h-72 m-4 rounded-full"/>
      <Text className="text-center text-2xl text-green-500 font-freepixel">
        This stuff has been edited.</Text>
    </SafeAreaView>
  );
}
