import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import CustomText from "../../Components/CustomText";
import { Width, height } from "../../Components/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "../../Components/CustomButton";
import * as ImagePicker from "expo-image-picker";

const Photo = ({ navigation }) => {
    const [imageUri, setImageUri] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState([]);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: true,
            selectionLimit: 50,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            setImageUri(result?.assets);
        }
    };

    const handleSelected = (image) => {
        if (selectedImage && selectedImage.some && selectedImage.some((selected) => selected.uri === image.uri)) {
            const updatedSelectedImages = selectedImage.filter((selected) => selected.uri !== image.uri);
            setSelectedImage(updatedSelectedImages);
        } else {
            setSelectedImage([image]);
        }
    };



    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <CustomText textStyle={styles.customText} title="" />
                        <CustomText textStyle={styles.titleText} title="Photo" />
                        <TouchableOpacity disabled={selectedImage?.length <= 0} onPress={() => navigation.navigate("EditingPhoto", { EditingPhoto: selectedImage })}>
                            <CustomText textStyle={[styles.titleText, { fontSize: 15 }]} title={imageUri ? "Select" : ""} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <TouchableOpacity
                            onPress={() => pickImage()}
                            style={styles.iconContainer}
                        >
                            <AntDesign name="plus" style={styles.plusIcon} />
                        </TouchableOpacity>
                        <View style={styles.selectedImagesContainer}>
                            {imageUri?.map((image, index) => (
                                <TouchableOpacity
                                    onPress={() => handleSelected(image)}
                                    key={index}
                                    style={[
                                        selectedImage?.some((selected) => selected.uri === image.uri)
                                            ? styles.SelectedPic
                                            : null
                                    ]}
                                >
                                    <Image
                                        source={{ uri: image?.uri }}
                                        style={styles.iconContainer}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    {!imageUri && (
                        <>
                            <Image
                                source={require("../../Assets/Images/UpperArrow.png")}
                                style={styles.upperArrowImage} />
                            <CustomText title="Let's go!" textStyle={styles.letsGoText} />
                            <CustomText
                                title="Just add your photo here and let Lensa work its magic"
                                textStyle={styles.descriptionText}
                            />
                        </>
                    )}
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton disabled={selectedImage?.length <= 0}
                        onPress={() => navigation.navigate("EditingPhoto", { EditingPhoto: selectedImage })}
                        icon title="Magic Avatars" />
                </View>
            </ScrollView>
        </View>
    );
};

export default Photo;

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
        margin: 5,
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
        position: "absolute",
        width: Width,
        alignItems: "center",
        top: Width / 0.58,
    },


    selectedImagesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    SelectedPic: {
        borderColor: Colors.blue,
        borderWidth: 2,
        height: 90,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        margin: 5,
    }


});
