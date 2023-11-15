import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { ContainerStyle } from '../../Components/ContainerStyle'
import { Colors } from '../../Utils/Colors'

const Onboarding = ({ navigation }) => {
    return (
        <View style={[ContainerStyle.container, { backgroundColor: Colors.white }]}>
            <Image source={require('../../Assets/Images/Onboarding.png')} />
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})