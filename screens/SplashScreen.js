import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="slideInDown"
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="stretch"
                />
            </View>

            <Animatable.View
                style={styles.footer}
                animation="slideInLeft"
            >
                <Text style={styles.title}>Hayvan sahiplenmenin en kolay yolu!</Text>
                {/* <Text style={styles.text}>Giriş yapın</Text> */}

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <LinearGradient
                            colors={["#08d4c4", "#01ab9d"]}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Başla</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>


                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});