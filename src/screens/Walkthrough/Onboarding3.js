import { ImageBackground } from 'react-native'
import React from 'react'
import SkipButton from '../../Components/SkipButton'
import { ContainerStyle } from '../../Components/ContainerStyle'
import PoweredBy from '../../Components/PoweredBy'

const Onboarding3 = ({ navigation }) => {
    return (
        <ImageBackground style={ContainerStyle.container}
            resizeMode='cover'
            source={require('../../Assets/Images/skip_5.jpeg')}>
            <SkipButton navigation={navigation} />
            <PoweredBy title="Magic Avatars" onPress={() => navigation.navigate('Onboarding4')} />
        </ImageBackground>
    )
}

export default Onboarding3
