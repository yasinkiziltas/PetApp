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
                    title: 'Pet App',
                    subtitle: 'Türkiyenin en iyi hayvan sahiplenme platformu!',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Pet App',
                    subtitle: 'Ücretsiz erişim!',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Pet App',
                    subtitle: 'Hayvan sahiplenin!',
                },

            ]}
        />
    )
}
