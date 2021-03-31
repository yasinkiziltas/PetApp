import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'



export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            /> */}
            <Text style={styles.text}>Hesap Oluştur</Text>

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
                buttonTitle="Kayıt Ol"
                onPress={() => { }}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.goBack()}>
                <Text style={styles.navButtonText}>Geri Dön</Text>
            </TouchableOpacity>

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    Kaydolarak, bizim{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Kullanım Şartları
                </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> ve </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                    Gizlilik Sözleşmesi
                 </Text>
                <Text style={styles.color_textPrivate}>
                    kabul etmiş olursunuz.
                </Text>



            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'Lato-Regular',
    },
    forgotButton: {
        marginVertical: 15,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        // fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});