import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Width } from "./Dimensions";
import { Colors } from "../Utils/Colors";

const SkipButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("BottomTab")}
            style={{ alignContent: "flex-end", alignItems: "flex-end" }}
        >
            <Text
                style={{
                    paddingHorizontal: 20,
                    color: Colors.white,
                }}
            >
                Skip
            </Text>
        </TouchableOpacity>
    );
};

export default SkipButton;

const styles = StyleSheet.create({});
