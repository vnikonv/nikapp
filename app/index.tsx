import { FlatList, Pressable, Text, Image, View, TouchableOpacity } from "react-native";
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/";
import { offers } from "../constants/";
import CartButton from "../components/cartButton";
import cn from "clsx";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-white text-base">
            <Image source={images.avatar} className="!w-24 !h-24 rounded-full m-auto" />
            <Text className="text-center text-2xl text-green-500 font-freepixel">
                Compilation Charm</Text>
            <View className="flex-between flex-row w-full mb-2 px-5">
                <View className="flex-start">
                    <Text className="text-green-600 bold">DELIVER TO</Text>
                    <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                        <Text className="paragraph-bold text-dark-100">Petrovavlovsk, KZ</Text>
                        <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <CartButton />
            </View>
            <FlatList
                data={offers}
                renderItem={({ item, index }) => {
                    const isEven: boolean = index % 2 == 0;
                    return (
                        <View>
                            <Pressable className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')} style={{ backgroundColor: item.color }}>
                                {({ pressed }) => (
                                    <Fragment>
                                        <View className={"h-full w-1/2"}>
                                            <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                                        </View>

                                        <SafeAreaView className={cn("offer-card__info", isEven ? 'pl-5' : 'pr-5')}>
                                            <Text className="h1-bold text-white leading-tight">
                                                {item.title}
                                            </Text>
                                            <Image source={images.arrowRight}
                                                className='size-10'
                                                resizeMode='contain'
                                                tintColor='#ffffff'
                                            />
                                        </SafeAreaView>
                                    </Fragment>
                                )}
                            </Pressable>
                        </View>
                    )
                }}
                contentContainerClassName='pb-28 px-5'
            />
        </SafeAreaView>
    );
}