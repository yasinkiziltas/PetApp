import React from 'react';
import { StyleSheet } from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import SplashScreen from '../screens/SplashScreen';

import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeScreen from '../screens/HomeScreen';


const AppStack = createStackNavigator();

export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    React.useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        })
    }, [])

    if (setIsFirstLaunch == null) {
        return null;
    }
    else if (isFirstLaunch == true) {
        routeName = 'Onboarding'
    }
    else {
        routeName = 'Login'
    }


    return (
        <AppStack.Navigator initialRouteName={routeName}>
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
            <AppStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
            <AppStack.Screen name="Signup" component={SignupScreen} options={{ header: () => null }} />
            {/* <AppStack.Screen name="Splash" component={SplashScreen} options={{ header: () => null }} /> */}
        </AppStack.Navigator>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
