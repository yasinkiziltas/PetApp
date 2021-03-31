import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Animatable.View
            style={styles.container}
            animation="fadeInLeft"
        >
            <View style={styles.header}>
                <Text style={styles.text_header}>Kayıt Ol</Text>
            </View>

            <Animatable.View
                style={styles.footer}
                animation="fadeInRight"
            >
                <View style={styles.action}>
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="E-Mail"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Feather
                        style={{ marginTop: 15 }}
                        name="check-circle"
                        color="green"
                        size={15}
                    />
                </View>

                <View style={styles.action}>
                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Şifre"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                    <Feather
                        style={{ marginTop: 15 }}
                        name="eye-off"
                        color="grey"
                        size={15}
                    />
                </View>

                <FormButton
                    buttonTitle="Kayıt Ol"
                    onPress={() => { }}
                />

                <TouchableOpacity style={styles.otherButtons} onPress={() => navigation.goBack()}>
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


            </Animatable.View>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        // borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    otherButtons: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'lato-regular',
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