import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useRef } from "react";
import { Colors } from "../../Utils/Colors";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Width } from "../../Components/Dimensions";
import { ContainerStyle } from "../../Components/ContainerStyle";

const Index = ({ navigation }) => {
    const circularProgress = useRef(null);
    const [completed, setCompleted] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(async () => {
            setCompleted(true);
        }, 4500);
        return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        const timer = setTimeout(async () => {
            navigation.replace("Welcome");
        }, 5500);
        return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        if (circularProgress.current) {
            circularProgress.current.animate(100, 4000);
        }
    }, []);

    return (
        <View style={ContainerStyle.container}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Image
                    source={require("../../Assets/Images/Splash_Icon.png")}
                    style={{ height: 100, width: 100 }}
                />
            </View>
            <View style={{ position: "absolute", bottom: 150, width: Width }}>
                <AnimatedCircularProgress
                    ref={circularProgress}
                    size={40}
                    width={5}
                    fill={10}
                    tintColor={Colors.white}
                    onAnimationComplete={() => console.log("")}
                    backgroundColor="#3d5875"
                    style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                    }}
                />
                {completed && (
                    <View style={{}}>
                        <Text
                            style={[
                                {
                                    color: Colors.white,
                                    fontSize: 18,
                                    textAlign: "center",
                                    marginVertical: 10,
                                },
                            ]}
                        >
                            All good!{"\n"} Our AI is getting ready{" "}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({});
