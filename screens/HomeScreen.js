import React from 'react'
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
    const { container, shadow, mainAnimals, header, leftImage } = styles;
    //animalType, animalData

    const animalData = [
        {
            id: 1,
            name: 'Kedi',
            icon: require('../assets/animals/cat.png')
        },
        {
            id: 2,
            name: 'Köpek',
            icon: require('../assets/animals/dog.png')
        },
        {
            id: 3,
            name: 'Kuş',
            icon: require('../assets/animals/bird.png')
        },
        {
            id: 4,
            name: 'Balık',
            icon: require('../assets/animals/fish.png')
        },
        {
            id: 5,
            name: 'Tavşan',
            icon: require('../assets/animals/rabbit.png')
        },
        {
            id: 6,
            name: 'Kaplumbağa',
            icon: require('../assets/animals/turtle.png')
        },
        {
            id: 7,
            name: 'Kertenkele',
            icon: require('../assets/animals/lizard.png')
        },
        {
            id: 8,
            name: 'Yılan',
            icon: require('../assets/animals/snake.png')
        },
        {
            id: 9,
            name: 'Kuş',
            icon: require('../assets/animals/bird.png')
        },
        {
            id: 10,
            name: 'Örümcek',
            icon: require('../assets/animals/spider.png')
        },
    ]

    const catData = [
        {
            id: 1,
            name: 'Tosun',
            animals: [1],
            photo: require('../assets/animals/cat1.jpg'),
            animalDetail: [
                {
                    detailId: 1,
                    name: "Tosun",
                    desc: "Tekir",
                    photo: require('../assets/animals/cat1.jpg'),
                }
            ]
        },
        {
            id: 2,
            name: 'Duman',
            animals: [1],
            photo: require('../assets/animals/duman.jpg'),
            animalDetail: [
                {
                    detailId: 2,
                    name: "Duman",
                    desc: "Scottish",
                    photo: require('../assets/animals/duman.jpg'),
                }
            ]
        },

        {
            id: 3,
            name: 'Çomar',
            animals: [2],
            photo: require('../assets/animals/dog1.jpg'),
            animalDetail: [
                {
                    detailId: 3,
                    name: "Çomar",
                    desc: "Kont",
                    photo: require('../assets/animals/dog1.jpg'),
                }
            ]
        },
        {
            id: 4,
            name: 'Alfa',
            animals: [3],
            photo: require('../assets/animals/bird1.jpg'),
            animalDetail: [
                {
                    detailId: 4,
                    name: 'Alfa',
                    desc: "Muhabbet kuşu",
                    photo: require('../assets/animals/bird1.jpg'),
                }
            ]
        },

    ]

    const [animals, setAnimals] = React.useState(animalData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [cats, setCats] = React.useState(catData)

    function onSelectCategory(category) {
        //filter animals
        let catList = catData.filter(a => a.animals.includes(category.id))

        setCats(catList)

        setSelectedCategory(category)
    }

    function getAnimalNameById(id) {
        let animal = animals.filter(a => a.id == id)

        if (animal.length > 0)
            return animal[0].name

        return "";
    }

    function renderHeader() {
        return (
            <View style={header}>
                <TouchableOpacity style={leftImage}>
                    <MaterialCommunityIcons
                        name="account-heart"
                        color="black"
                        size={30}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, justfiyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 5, fontSize: 20 }}>Pet App</Text>
                </View>

                <TouchableOpacity style={{ paddingTop: -7, paddingRight: 5, justifyContent: 'center' }} onPress={() => navigation.navigate('AddPost')}>
                    <MaterialCommunityIcons
                        name="plus-circle"
                        color="black"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainAnimals() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        backgroundColor: (selectedCategory?.id == item.id) ? '#009387' : '#fff', //#009387 78006c
                        padding: 5,
                        marginLeft: 10,
                        paddingBottom: 15,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 5,
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white'
                        }}
                    >

                        <Image
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />


                    </View>
                    <Text
                        style={{
                            color: (selectedCategory?.id == item.id) ? 'white' : 'black',
                            fontSize: 15,
                            marginTop: 15
                        }}
                    >
                        {item.name}
                    </Text>


                </TouchableOpacity>
            )
        }

        return (
            <View style={container}>
                <Text style={mainAnimals}>Evcil</Text>
                <Text style={mainAnimals}>Hayvanlar</Text>

                <FlatList
                    style={{ paddingLeft: 5 }}
                    data={animals}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 5 }}
                />
            </View>
        )
    }

    function renderCatList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ marginBottom: 10 }}
                    onPress={() => navigation.navigate('AnimalDetail', {
                        item
                        // currentLocation
                    })}
                >

                    <View style={{ marginBottom: 25 }}>

                    </View>

                    <View>
                        <Image
                            source={item.photo}
                            resizeMode='cover'
                            style={{ marginBottom: 10, width: '100%', height: 150, borderRadius: 25 }} // borderWidth:1
                        />
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: 80,
                            backgroundColor: 'white',
                            borderTopRightRadius: 15,
                            borderBottomLeftRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}
                    >
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    </View>

                    {/* <Text style={{paddingLeft:5}}>{item.name}</Text> */}

                    {/* <View 
                        style={{
                            flexDirection:'row',
                            marginLeft:10
                        }}
                    >
                        {
                            item.animals.map((animalId) => {
                                return(
                                    <View
                                        style={{flexDirection:'row'}}
                                        keyExtractor={animalId}
                                    >
                                        <Text>{getAnimalNameById(animalId)}</Text>
                                    </View>
                                )
                            })
                        }

                    </View> */}

                </TouchableOpacity>
            )
        }


        return (
            <FlatList
                data={cats}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 30 }}
            />
        )
    }

    return (
        <SafeAreaView style={container}>
            {renderHeader()}
            {renderMainAnimals()}
            {renderCatList()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex:1
        backgroundColor: '#fff'
    },
    shadow: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        height: 40,
        marginBottom: 15

    },
    mainAnimals: {
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 30
    },
    leftImage: {
        //justfiyContent:'center', 
        width: 150,
        paddingLeft: 5
    }
})