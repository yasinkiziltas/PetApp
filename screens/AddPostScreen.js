import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { icons, SIZES } from '../constants'

export default function AddPostScreen({ navigation }) {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
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
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})