import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomText from "../../Components/CustomText";
import { ContainerStyle } from "../../Components/ContainerStyle";
import { Width, height } from "../../Components/Dimensions";
import Checkbox from 'expo-checkbox';

const Welcome = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={ContainerStyle.container}>
            <View style={{ alignItems: "center", marginTop: Width / 3 }}>
                <Image
                    source={require("../../Assets/Images/Splash_Icon.png")}
                    style={{ height: 90, width: 90 }}
                />
                <CustomText textStyle={{ marginTop: 10 }} title="Avatar" />
                <CustomText
                    textStyle={{
                        marginTop: 20,
                        textAlign: "center",
                        paddingHorizontal: 58,
                        fontSize: 17,
                    }}
                    title="All in one editer. Supercharged By AI"
                />
            </View>
            <View
                style={{
                    backgroundColor: "red",
                    position: "absolute",
                    bottom: height / 10,
                    flexDirection: "row",
                    width: Width,
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
            >

                <CustomText
                    textStyle={{
                        fontSize: 13,
                    }}
                    title="All in one editer. Supercharged By AI"
                />
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({});
