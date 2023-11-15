import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import { Width, height } from "./Dimensions";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";

const PoweredBy = ({ onPress, title }) => {
    return (
        <View
            style={styles.Container}
        >
            <View
                style={styles.inerContainer}
            >
                <Text style={{ color: Colors.white, fontWeight: "bold" }}>
                    Powered by AI
                </Text>
            </View>
            <CustomText title={title} />
            <CustomText
                textStyle={{ fontSize: 16, lineHeight: 20, fontWeight: '600' }}
                title="Create personalized, impressive avatars with the help of powerful AI technology."
            />
            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <CustomButton onPress={onPress} title="Continue" />
            </View>
        </View>
    );
};

export default PoweredBy;

const styles = StyleSheet.create({
    Container: {
        position: "absolute",
        bottom: 120,
        width: Width,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 20,
        // height: height,
        // marginTop: height / 6,
    },
    inerContainer: {

        backgroundColor: Colors.blue,
        height: 30,
        width: 130,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginBottom: 15,

    }
});
