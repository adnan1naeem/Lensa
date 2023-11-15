import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function Add({ navigation }) {

    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);


    const takePicture = async () => {

        const data = await Camera.takePicture(null);
        console.log(data);
        setImageUri(data.uri);

    };


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: true,
            selectionLimit: 50,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result?.assets[0]?.uri);
        if (!result.canceled) {
            setImageUri(result?.assets[0]?.uri);
        }
    };

    return (
        <View style={styles.container}>
            {/* <View style={styles.cameraContainer}>
                <Camera
                    ref={(ref) => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'}
                />
            </View> */}

            <Button title={'Take Picture'} onPress={takePicture} />
            <Button title={'Gallery'} onPress={pickImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        paddingTop: 100
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
    button: {
        flex: 0.1,
        padding: 10,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
});