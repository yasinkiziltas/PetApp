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
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/dog.png')} style={{ width: 200, height: 200 }} />,
                    title: 'Pet App',
                    subtitle: 'Türkiyenin en iyi hayvan sahiplenme platformu!',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/cat.png')} style={{ width: 200, height: 200 }} />,
                    title: 'Pet App',
                    subtitle: 'Ücretsiz erişim!',
                }
            ]}
        />
    )
}
