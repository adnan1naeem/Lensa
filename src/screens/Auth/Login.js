import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContainerStyle } from '../../Components/ContainerStyle'


const Login = () => {
    return (
        <View style={ContainerStyle.container}>
            <ScrollView>
                <Text style={{ color: 'red' }}>Login</Text>
            </ScrollView>
        </View>
    )
}

export default Login

