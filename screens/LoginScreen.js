import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            {/* <Text style={styles.text}>Pet App</Text> */}

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="E-Mail"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Şifre"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Giriş"
                onPress={() => { }}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Üye Ol</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Şifremi unuttum</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navButtonText}>Üye olmadan devam et</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 90
    },
    logo: {
        height: 150,
        width: 150,
        marginBottom: 15,
        resizeMode: 'cover',
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily:,
    },
});