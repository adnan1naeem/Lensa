import { StyleSheet, Image, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomText from "../../Components/CustomText";
import { ContainerStyle } from "../../Components/ContainerStyle";
import { Width, height } from "../../Components/Dimensions";
import Checkbox from 'expo-checkbox';
import { Colors } from "../../Utils/Colors";
import CustomButton from "../../Components/CustomButton";

const Welcome = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <ScrollView>
            <View style={ContainerStyle.container}>
                <View style={styles.welcomeInnerContainer}>
                    <Image
                        source={require("../../Assets/Images/Splash_Icon.png")}
                        style={{ height: 90, width: 90 }}
                    />
                    <CustomText textStyle={{ marginTop: 10 }} title="Avatar" />
                    <CustomText
                        textStyle={styles.titleText}
                        title="All in one editer. Supercharged By AI"
                    />
                </View>
                <View
                    style={styles.checkBoxContainerOuter}
                >
                    <Checkbox
                        style={styles.checkBoxContainer
                        }
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                    <CustomText
                        textStyle={{
                            fontSize: 16,
                        }}
                        title="All in one editer. Supercharged By AI"
                    />
                </View>
                <View style={styles.NavgateButton}>
                    <CustomButton title="Continue" onPress={() => navigation.navigate('Onboarding1')} />


                </View>


            </View>
        </ScrollView >
    );
};

export default Welcome;

const styles = StyleSheet.create({
    welcomeInnerContainer: {
        alignItems: "center",
        marginTop: Width / 3
    },
    titleText: {
        marginTop: 20,
        textAlign: "center",
        paddingHorizontal: 58,
        fontSize: 17,
    },
    checkBoxContainer: {
        marginHorizontal: 10,
        height: 24,
        width: 24,
        borderRadius: 12,
        borderColor: Colors.white
    },
    checkBoxContainerOuter:
    {
        position: "absolute",
        bottom: height / 5,
        flexDirection: "row",
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    NavgateButton: {
        position: "absolute",
        bottom: height / 10,
        flexDirection: "row",
        width: Width / 1.1,
        justifyContent: 'center',
        alignSelf: 'center'
    }

});
