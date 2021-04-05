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
                        width:150,
                        paddingLeft: 5,
                        justifyContent: 'center',
                    }}

                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons style={{width:30, height:30}} name="arrow-left" size={30} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
           <SafeAreaView style={styles.container}>
               {renderHeader()}
           </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgray',
    }
})