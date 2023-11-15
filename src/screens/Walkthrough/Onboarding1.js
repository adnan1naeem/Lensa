import { ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import SkipButton from '../../Components/SkipButton'
import { ContainerStyle } from '../../Components/ContainerStyle'
import PoweredBy from '../../Components/PoweredBy'

const Onboarding1 = ({ navigation }) => {
    return (

        <ImageBackground style={ContainerStyle.container}
            resizeMode='cover'
            source={require('../../Assets/Images/skip_1.jpeg')}>
            <SkipButton navigation={navigation} />
            <PoweredBy title="Magic Retouch" onPress={() => navigation.navigate('Onboarding2')} />
        </ImageBackground>

    )
}

export default Onboarding1
