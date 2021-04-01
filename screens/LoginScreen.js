import React, { useContext, useState } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'

import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Animatable.View
                style={styles.header}
                animation="fadeInDown"
            >
                <Text style={styles.text_header}>Giriş Yap</Text>
            </Animatable.View >

            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
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
                    buttonTitle="Giriş"
                    onPress={() => login(email, password)}
                />

                <TouchableOpacity style={styles.otherButtons} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.navButtonText}>Kayıt Ol</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.otherButtons} onPress={() => { }}>
                    <Text style={styles.navButtonText}>Üye olmadan devam et</Text>
                </TouchableOpacity>



            </Animatable.View>
        </View>
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
        marginLeft: 130,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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
});