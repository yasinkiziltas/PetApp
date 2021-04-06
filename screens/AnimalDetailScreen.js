import React from 'react'
import { View, Animated, TouchableOpacity, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AnimalDetailScreen({route, navigation}) {
    const [animals, setAnimals] = React.useState(null)

    React.useEffect(() => {
        let {item} = route.params;
        setAnimals(item)
        
    })

    function renderHeader(){
        return(
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                    style={{
                        marginTop:30,
                        width:120,
                        justifyContent: 'center',   
                    }}

                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons style={{width:30, height:30}} name="arrow-left" size={30} />
                </TouchableOpacity>

                <View 
                    style={{                
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                 >
                     <View 
                    style={{
                        marginTop:60,
                        height:40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal:50,
                        borderRadius:10,
                        backgroundColor:'lightgray'
                    }}
                 >
                     <Text style={{fontWeight:'bold', fontSize:20}}>{animals?.name}</Text>
                 </View>

                </View>

                <TouchableOpacity 
                    style={{
                        marginTop:30,
                        marginLeft:80,
                        width:120,
                        justifyContent: 'center',  
                    }}                 
                >
                    <MaterialCommunityIcons style={{width:30, height:30}} name="menu-open" size={30} />

                </TouchableOpacity>
            </View>
        )
    }

    function renderAnimalInfo(){
        return (            
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                //onScroll

            >

              {
                     animals?.animalDetail.map((item, index) => (
                         <View
                             key={`animalDetail-${index}`}
                             style={{
                                marginLeft:120,
                                marginTop:80,
                                width:150,
                                height:150,
                                alignItems:'center',                              
                            }}
                         >   
                             <View>
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        borderRadius:15,
                                        width: 100,
                                        height: "100%"
                                    }}
                                />

                            </View>
                         </View>
                     ))
                }

                 

            </Animated.ScrollView>
        )
    }

    return (
        <View>
           <SafeAreaView style={styles.container}>
               {renderHeader()}           
           </SafeAreaView>

           <View>
                 {renderAnimalInfo()}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'lightgray',
    }
})