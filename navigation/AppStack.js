import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import AnimalDetailScreen from '../screens/AnimalDetailScreen';
import ContactPerson from '../screens/ContactPerson';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const fetchFonts = () => {
    return Font.loadAsync({
        'kufam-semi': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
        'lato-bold': require('../assets/fonts/Lato-Bold.ttf'),
        'lato-bold-italic': require('../assets/fonts/Lato-BoldItalic.ttf'),
        'lato-italic': require('../assets/fonts/Lato-Italic.ttf'),
        'lato-regular': require('../assets/fonts/Lato-Regular.ttf')
    });
};

const FeedStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Pet App"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        // options={{
        //     headerTitleAlign: 'center',
        //     headerTitleStyle: {
        //         color: '#2e64e5',
        //         fontFamily: 'kufam-semi',
        //         fontSize: 18,
        //     },
        //     headerStyle: {
        //         shadowColor: '#fff',
        //         elevation: 0,
        //     },

        //     // headerRight: () => (
        //     //     <View style={{ marginRight: 10 }}>
        //     //         <FontAwesome5.Button
        //     //             name="plus"
        //     //             size={22}
        //     //             backgroundColor="#fff"
        //     //             color="#2e64e5"
        //     //             onPress={() => navigation.navigate('AddPost')}
        //     //         />
        //     //     </View>
        //     // ),
        // }}
        />
        <Stack.Screen
            name="AddPost"
            component={AddPostScreen}
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen
            name="AnimalDetail"
            component={AnimalDetailScreen}
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen
            name="ContactPerson"
            component={ContactPerson}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                headerTitle: 'Edit Profile',
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
            }}
        />
    </Stack.Navigator>
);


export default function AppStack() {

    const [dataLoaded, setDataLoaded] = React.useState(false)

    // if (!dataLoaded) {
    //     return (
    //         <AppLoading
    //             onError={console.log('')}
    //             startAsync={fetchFonts}
    //             onFinish={() => setDataLoaded(true)}
    //         />
    //     )
    // }

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#2e64e5',
            }}>
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={({ route }) => ({
                    tabBarLabel: 'Anasayfa',
                    // tabBarVisible: route.state && route.state.index === 0, //eğer addpost ekranında isek tab bar gorunmıcek.
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};