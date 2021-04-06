import React from 'react'
import { View, Animated, TouchableOpacity, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { icons, COLORS, SIZES, FONTS } from '../constants'

export default function AnimalDetailScreen({ route, navigation }) {
    const [animals, setAnimals] = React.useState(null)

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
            //onScroll
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
                            <Text>sa</Text>
                        </View>

                    ))
                }
            </Animated.ScrollView>
        )
    }

    return (
        <View>
            {/* style={styles.container} */}
            <SafeAreaView>
                {renderHeader()}
                {renderAnimalInfo()}
            </SafeAreaView>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'lightgray',
//     }
// })