import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import CustomText from "../../Components/CustomText";
import { Width, height } from "../../Components/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "../../Components/CustomButton";

const Videos = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <CustomText
                        textStyle={styles.customText}
                        title=""
                    />
                    <CustomText
                        textStyle={styles.titleText}
                        title="Video"
                    />
                    <CustomText
                        textStyle={styles.customText}
                        title=""
                    />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <AntDesign
                        name="plus"
                        style={styles.plusIcon}
                    />
                </TouchableOpacity>
                <Image
                    source={require("../../Assets/Images/UpperArrow.png")}
                    style={styles.upperArrowImage}
                />
                <CustomText
                    title="Let's go!"
                    textStyle={styles.letsGoText}
                />
                <CustomText
                    title="Just add your photo here and let Lensa work its magic"
                    textStyle={styles.descriptionText}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton icon title="Magic Avatars" />
            </View>
        </View>
    );
};


export default Videos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#f7f7f7",
        height: 60,
        justifyContent: "flex-end",
        paddingHorizontal: 25,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    customText: {
        fontSize: 13,
        color: Colors.black,
    },
    titleText: {
        fontSize: 20,
        color: Colors.black,
        paddingVertical: 10
    },
    contentContainer: {
        width: Width,
        height: height,
        padding: 10,
        backgroundColor: Colors.white,
    },
    iconContainer: {
        height: 80,
        width: 80,
        backgroundColor: "#efefef",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,

    },
    plusIcon: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: 30,
    },
    upperArrowImage: {
        position: "absolute",
        top: 50,
        left: 20,
        height: 230,
        resizeMode: "contain",
    },
    letsGoText: {
        marginTop: 190,
        color: Colors.black,
        textAlign: "center",
        marginVertical: 5,
    },
    descriptionText: {
        color: Colors.black,
        fontSize: 15,
        textAlign: "center",
        lineHeight: 20,
        fontWeight: "500",
    },
    buttonContainer: {
        position: 'absolute',
        width: Width,
        alignItems: 'center',
        top: Width / 0.58,
    },
});

