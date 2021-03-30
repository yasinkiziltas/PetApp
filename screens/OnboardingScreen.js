import React from 'react'
import { Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ navigation }) {
    return (
        <Onboarding
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swipe2',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper3',
                },

            ]}
        />
    )
}
