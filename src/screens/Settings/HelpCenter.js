import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import Greater from "../../Components/Icons/Greater";

const HelpCenter = () => {
    return (
        <View>
            <Text style={styles.headingText}>HELP CENTER</Text>

            <View style={styles.ButtonContainerBox}>
                <TouchableOpacity
                    style={styles.helpCenterContainer}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            { color: Colors.black, paddingBottom: 15 },
                        ]}
                    >
                        FAQ
                    </Text>
                    <Greater IconStyle={styles.greaterIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.InerContainer}>
                    <Text style={[styles.buttonText, { color: Colors.black }]}>
                        Send Feedback
                    </Text>
                    <Greater IconStyle={styles.greaterIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SeeWhatsNewButton}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            { color: Colors.black, paddingBottom: 15 },
                        ]}
                    >
                        See What's New
                    </Text>
                    <Greater IconStyle={styles.greaterIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HelpCenter;

const styles = StyleSheet.create({
    headingText: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 18,
        color: Colors.headingColor,
        marginTop: 20,
    },
    ButtonContainerBox: {
        backgroundColor: Colors.white,
        paddingVertical: 20,
        width: "94%",
        alignSelf: "center",
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    buttonText: {
        color: Colors.blue,
        fontSize: 18,
    },
    InerContainer: {
        borderBottomWidth: 0.3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    helpCenterContainer: {
        borderBottomWidth: 0.3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    SeeWhatsNewButton: {
        borderBottomWidth: 0.3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingTop: 22,
    },
    greaterIcon: {
        fontSize: 22,
        color: Colors.headingColor
    }
});
