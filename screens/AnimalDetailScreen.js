import React from 'react'
import { View, Animated, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native'
import { icons, COLORS, SIZES, FONTS } from '../constants'

export default function AnimalDetailScreen({ route, navigation }) {
    const [animals, setAnimals] = React.useState(null)
    const scrollX = new Animated.Value(0)

    React.useEffect(() => {
        let { item } = route.params;
        setAnimals(item)

    })

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: COLORS.lightGray3 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 1,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Pet Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    >
                        <Text style={{ ...FONTS.h2 }}>{animals?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    function renderAnimalInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}
            >

                {/* Detail Pet Photo */}
                {
                    animals?.animalDetail.map((item, index) => (
                        <View
                            key={`animalDetail-${index}`}
                            style={{ alignItems: 'center' }}
                        >
                            <View style={{ height: SIZES.height * 0.35 }}>
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />
                            </View>
                            <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name}</Text>
                            <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.body3 }}>{item.desc}</Text>
                        </View>

                    ))
                }
            </Animated.ScrollView>
        )
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View style={{ height: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: SIZES.padding }}>

                    {
                        animals?.animalDetail.map((item, index) => {
                            const opacity = dotPosition.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: "clamp"
                            })

                            const dotSize = dotPosition.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                                extrapolate: "clamp"
                            })

                            const dotColor = dotPosition.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                                extrapolate: "clamp"
                            })

                            return (
                                <Animated.View
                                    key={`dot-${index}`}
                                    opacity={opacity}
                                    style={{
                                        borderRadius: SIZES.radius,
                                        marginHorizontal: 6,
                                        width: dotSize,
                                        height: dotSize,
                                        backgroundColor: dotColor
                                    }}
                                />
                            )
                        })

                    }
                </View>
            </View>
        )
    }

    function renderOrder() {
        return (
            <View>
                {
                    renderDots()
                }
                <View>

                </View>
            </View>
        )
    }

    return (
        <View>
            <SafeAreaView>
                {renderHeader()}
                {renderAnimalInfo()}
                {renderOrder()}
            </SafeAreaView>
        </View>
    )
}
