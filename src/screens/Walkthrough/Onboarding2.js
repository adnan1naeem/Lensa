import { ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import SkipButton from '../../Components/SkipButton'
import { ContainerStyle } from '../../Components/ContainerStyle'
import PoweredBy from '../../Components/PoweredBy'

const Onboarding2 = ({ navigation }) => {
    return (

        <ImageBackground style={ContainerStyle.container}
            resizeMode='cover'
            source={require('../../Assets/Images/4.jpeg')}>
            <SkipButton navigation={navigation} />
            <PoweredBy title="Magic Avatars" onPress={() => navigation.navigate('Onboarding3')} />
        </ImageBackground>

    )
}

export default Onboarding2
