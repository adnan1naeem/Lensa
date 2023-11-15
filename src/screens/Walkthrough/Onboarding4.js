import {
    ImageBackground,
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import SkipButton from "../../Components/SkipButton";
import { ContainerStyle } from "../../Components/ContainerStyle";
import PoweredBy from "../../Components/PoweredBy";
import Modal from "react-native-modal";
import { Width, height } from "../../Components/Dimensions";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../../Utils/Colors";
import CustomText from "../../Components/CustomText";


const Onboarding4 = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <ImageBackground
                style={ContainerStyle.container}
                resizeMode="cover"
                source={require("../../Assets/Images/skip_4.jpeg")}
            >
                <SkipButton navigation={navigation} />
                <PoweredBy title="Magic Avatars" onPress={toggleModal} />
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.HeaderContainerModal}>
                            <TouchableOpacity style={{ padding: 10 }} onPress={toggleModal}>
                                <Entypo style={{ fontSize: 25 }} name="cross" />
                            </TouchableOpacity>
                            <View style={{ padding: 10 }}>
                                <CustomText
                                    textStyle={{ color: Colors.black, fontSize: 15 }}
                                    title="New"
                                />
                            </View>
                            <View style={{ padding: 10 }}></View>
                        </View>
                        <View style={styles.ImageContainer}>
                            <Image
                                source={require("../../Assets/Images/Onboarding.png")}
                                resizeMode="contain"
                                style={styles.ImageModal}
                            />
                        </View>
                        <CustomText textStyle={styles.Magictitle} title="Magic Avatars" />
                        <CustomText
                            textStyle={styles.MagicDiscription}
                            title="Generate mind-blowing avatars from your photos with one of the most advanced AI ever created"
                        />
                        <TouchableOpacity
                            onPress={() => [navigation.navigate("BottomTab"), toggleModal()]}
                            style={styles.ModalButton}>
                            <Text style={styles.buttonTitle}>Try Now</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </>
    );
};

export default Onboarding4;

const styles = StyleSheet.create({
    HeaderContainerModal: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalContainer: {
        backgroundColor: Colors.white,
        height: height / 1.2,
        borderRadius: 15,
    },
    ImageContainer: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    ImageModal: {
        height: 380,
        width: 380,
    },
    Magictitle: {
        color: Colors.black,
        alignSelf: "center",
        marginVertical: 20,
    },
    MagicDiscription: {
        fontSize: 12,
        color: Colors.black,
        width: Width / 1.5,
        alignSelf: "center",
        textAlign: "center",
        lineHeight: 20,
        fontWeight: "300",
    },
    buttonTitle: {
        paddingVertical: 15,
        color: Colors.white,
        fontWeight: "bold",
    },
    ModalButton: {
        backgroundColor: "red",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "15%",
        borderRadius: 15,
        backgroundColor: Colors.blue,
    },
});
