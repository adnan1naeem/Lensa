import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import CustomText from "../../Components/CustomText";
import { Colors } from "../../Utils/Colors";
import HelpCenter from "./HelpCenter";
import Greater from "../../Components/Icons/Greater";

const Settings = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <View style={styles.header}>
                    <CustomText textStyle={styles.titleText} title="Settings" />
                </View>

                <Text style={styles.headingText}>PROFILE</Text>
                <View style={styles.ButtonContainerBox}>
                    <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                        <Text style={styles.buttonText}>
                            Sign in or Create a free Account
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.headingText, { marginTop: 50 }]}>
                    SUBSCRIPTION
                </Text>

                <View style={styles.ButtonContainerBox}>
                    <View style={{ borderBottomWidth: 0.3 }}>
                        <Text
                            style={{ color: Colors.black, fontSize: 20, fontWeight: "bold" }}
                        >
                            Free Trial
                        </Text>
                        <Text
                            style={{
                                color: Colors.headingColor,
                                paddingVertical: 5,
                                paddingBottom: 15,
                            }}
                        >
                            Auto-renewal: Mar 9,2023
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.buttonText, { paddingTop: 20 }]}>
                            Manage Subscription
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.headingText}>CUSTOMIZE</Text>

                <TouchableOpacity
                    style={[
                        styles.ButtonContainerBox,
                        { flexDirection: "row", justifyContent: "space-between" },
                    ]}
                >
                    <Text style={[styles.buttonText, { color: Colors.black }]}>
                        Appearance
                    </Text>

                    <Greater IconStyle={{ fontSize: 22, color: Colors.headingColor }} />
                </TouchableOpacity>
                <View style={{ marginVertical: 30 }}>
                    <HelpCenter />
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#f7f7f7",
        height: 60,
        paddingVertical: 15
    },

    titleText: {
        fontSize: 20,
        color: Colors.black,
        flex: 1,
        textAlign: "center",
    },
    headingText: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 18,
        color: Colors.headingColor,
        marginTop: 40,
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
});
