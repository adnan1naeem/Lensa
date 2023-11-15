import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { ContainerStyle } from '../../Components/ContainerStyle'
import Less from '../../Components/Icons/Less'
import { Colors } from '../../Utils/Colors'
import Rotate from '../../Components/Icons/Rotate'
import LeftU from '../../Components/Icons/LeftU'
import CustomButton from '../../Components/CustomButton'
import { height } from '../../Components/Dimensions'
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CustomText from '../../Components/CustomText'
import Greater from '../../Components/Icons/Greater'
import ImageOverlay from '../../Components/Icons/ImageOverlay'


const EditingPhoto = ({ navigation, route }) => {
    const circularProgress = useRef(null);
    const [completed, setCompleted] = useState(false);
    const [displayText, setDisplayText] = useState();
    const [params, setParams] = useState();
    const [progressBar, setprogressBar] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setCompleted(true);
            setDisplayText(`All good! \n Our AI is getting ready`);
        }, 2000);


        const secondTimer = setTimeout(() => {
            setDisplayText("wait for it... \n AI is scanning this photo");
        }, 4000);
        const ThirdTimer = setTimeout(() => {
            setprogressBar(true)
        }, 6000);


        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(ThirdTimer)
        };
    }, []);

    useEffect(() => {
        setParams(route?.params?.EditingPhoto)
        if (circularProgress.current) {
            circularProgress.current.animate(100, 3000);
        }
        console.log("Editing Screen123::", route?.params?.EditingPhoto);
    }, [params])

    const data = [
        {
            key: 'empty',
            text: 'None',
            uri: route?.params?.EditingPhoto[0]?.uri,
        },

        {
            key: '1',
            text: 'Magic',
            uri: require("../../Assets/Images/1.jpeg"),
        },
        {
            key: '2',
            text: 'Morning',
            uri: require("../../Assets/Images/2.jpeg"),
        },

        {
            key: '3',
            text: 'Day Look',
            uri: require("../../Assets/Images/3.jpeg"),
        },
        {
            key: '4',
            text: 'Go out',
            uri: require("../../Assets/Images/4.jpeg"),
        },
        {
            key: '5',
            text: 'Glam',
            uri: require("../../Assets/Images/5.jpeg"),
        },
        {
            key: '6',
            text: 'Medial',
            uri: require("../../Assets/Images/7.jpeg"),
        },
        {
            key: '7',
            text: 'Shining',
            uri: require("../../Assets/Images/8.jpeg"),
        },
    ]

    const handleItemSelection = (key) => {
        setSelectedItem(key === selectedItem ? null : key);
    };

    return (
        <View style={ContainerStyle.container}>
            <ScrollView>


                <View style={styles.headerCpmponent}>
                    <View>
                        <Less onPress={() => navigation.goBack()} IconStyle={{ fontSize: 25, color: Colors.white }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <LeftU IconStyle={{ fontSize: 26, color: Colors.white }} />
                        <Rotate IconStyle={{ fontSize: 22, color: Colors.white, paddingTop: 3, paddingHorizontal: 5, }} />
                        <LeftU icon={'arrow-u-right-top'} IconStyle={{ fontSize: 26, color: Colors.white }} />
                    </View>
                    <TouchableOpacity style={styles.savebtton}>
                        <Text style={{ color: Colors.white }}>Save</Text>
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: route?.params?.EditingPhoto[0]?.uri }} style={styles.ContainerImage} />
                {!progressBar &&
                    <>
                        <AnimatedCircularProgress
                            ref={circularProgress}
                            size={40}
                            width={5}
                            fill={10}
                            tintColor={Colors.white}
                            onAnimationComplete={() => console.log("")}
                            backgroundColor="#3d5875"
                            style={styles.animatedCircle}
                        />
                        {completed && (
                            <Text style={styles.AllGoodText}>
                                {displayText}
                            </Text>
                        )}
                    </>
                }
                {progressBar && (
                    <View>
                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                            <CustomText textStyle={selectedItem !== 'empty' ? styles.headerSelected : null} title={"Magic Retouch"} />
                            <CustomText textStyle={selectedItem == 'empty' ? styles.headerSelected : { marginHorizontal: 10, }} title={'Smart Adjust'} />
                        </View>
                        <FlatList
                            horizontal
                            data={data}
                            renderItem={({ item }) => {
                                if (item.key === 'empty') {
                                    return (
                                        <>

                                            <TouchableOpacity
                                                style={styles.ContainerFlatlist}
                                                onPress={() => handleItemSelection(item.key)}
                                            >
                                                <Image
                                                    source={{ uri: item?.uri }}
                                                    style={styles.filterImage}
                                                />
                                                {item.key === selectedItem && (
                                                    <View
                                                        style={[{
                                                            borderWidth: item.key === selectedItem ? 3 : 0,
                                                        }, styles.hoverEffect]} >
                                                        <ImageOverlay IconStyle={styles.notDisturbIcon} />
                                                    </View>
                                                )}
                                                <CustomText title={item.text} textStyle={[{
                                                    color: item.key === selectedItem ? Colors.borderColor : Colors.white
                                                }, styles.filterName]} />
                                            </TouchableOpacity>
                                            <View style={styles.verticalLine} />
                                        </>
                                    );
                                } else {
                                    return (
                                        <TouchableOpacity
                                            style={styles.flatListInnerContainer}
                                            onPress={() => handleItemSelection(item?.key)}
                                        >
                                            <View
                                                style={{
                                                    borderWidth: item?.key === selectedItem ? 3 : 0,
                                                    borderColor: Colors.borderColor,
                                                    borderRadius: 12,
                                                }}
                                            >
                                                <Image
                                                    source={item?.uri}
                                                    style={styles.filterImage}
                                                />
                                                {item.key === selectedItem && (
                                                    <View style={styles.ArrayselectedIndex} />
                                                )}
                                            </View>
                                            <CustomText title={item.text} textStyle={[{
                                                color: item.key === selectedItem ? Colors.borderColor : Colors.white
                                            }, styles.filterName]} />
                                        </TouchableOpacity>
                                    );
                                }
                            }}
                            keyExtractor={(item) => item.key.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                )}
            </ScrollView>
        </View>

    )
}

export default EditingPhoto

const styles = StyleSheet.create({
    AllGoodText: {
        color: Colors.white,
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
    },
    animatedCircle: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20
    },
    hoverEffect: {
        position: 'absolute',
        top: 0,
        left: 9.5,
        right: 9.5,
        bottom: 34,
        backgroundColor: Colors.blurEffect,
        borderRadius: 10,
        borderColor: Colors.borderColor,
    },
    ContainerFlatlist: {
        position: 'relative',
        paddingHorizontal: 10,
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 10,
    },
    filterImage: {
        height: 75,
        width: 65,
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    notDisturbIcon: {
        fontSize: 30,
        color: Colors.borderColor,
        textAlign: 'center',
        paddingVertical: 20
    },

    filterName: {
        fontSize: 17,
        fontWeight: '500',
    },
    ArrayselectedIndex: {
        height: 76,
        width: 67,
        position: 'absolute',
        top: 0,
        left: -1,
        right: 20,
        bottom: 30,
        backgroundColor: Colors.BlackTransparent,
        borderColor: Colors.borderColor,
        borderRadius: 10,
    },
    headerCpmponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center'
    },
    ContainerImage: {
        height: height / 1.8,
        width: '95%',
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    flatListInnerContainer: {
        paddingHorizontal: 5,
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    savebtton: {
        backgroundColor: Colors.blue,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10
    },
    headerSelected: {
        color: "#7d7d7e",
        paddingLeft: 10,
        fontSize: 19
    },
    verticalLine: {
        marginTop: 10,
        width: 1,
        backgroundColor: Colors.verticalLine,
        marginRight: 5,
        height: 80
    }
})