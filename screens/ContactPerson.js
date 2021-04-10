import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { COLORS, FONTS, icons, SIZES, GOOG_API_KEY } from '../constants'

export default function ContactPerson({ route, navigation }) {

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(null)
    const [toLocation, setToLocation] = React.useState(null)
    const [region, setRegion] = React.useState(null)

    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)

    React.useEffect(() => {
        let { animals, currentLocation } = route.params;

        let fromLoc = currentLocation.gps
        let toLoc = animals.location
        let street = currentLocation.streetName


        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setRestaurant(animals)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)

    }, [])

    function renderMap() {
        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Image
                            source={icons.pin}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white
                            }}
                        />
                    </View>
                </View>
            </Marker>
        )

        const carIcon = () => {
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
            //rotation
            >
                <Image
                    source={icons.car}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </Marker>
        }

        return (
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={styles.map}
                >
                    {destinationMarker()}
                    {carIcon()}

                </MapView>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderMap()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
