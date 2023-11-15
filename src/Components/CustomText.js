import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'
import { TextStyle } from './ComponentsStyle'

const CustomText = ({ title, textStyle }) => {

    return (
        <Text style={[TextStyle.container, textStyle, {}]}>{title}</Text>
    )
}

export default CustomText

