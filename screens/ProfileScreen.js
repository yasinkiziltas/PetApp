import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

export default function ProfileScreen() {
    const { logout } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => logout()}>
                <Text>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    )
}
