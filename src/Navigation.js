import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./Utils/Colors";

import Splash from "./screens/Splash/Index";
import Login from "./screens/Auth/Login";
import Welcome from "./screens/Welcome/Welcome";
import Onboarding1 from "./screens/Walkthrough/Onboarding1";
import Onboarding2 from "./screens/Walkthrough/Onboarding2";
import Onboarding3 from "./screens/Walkthrough/Onboarding3";
import Onboarding4 from "./screens/Walkthrough/Onboarding4";
import Onboarding from "./screens/Onboarding/Onboarding";
import BottomTab from "./BottomTab";
import Testing from "../Testing";
import EditingPhoto from "./screens/EditingPhoto/EditingPhoto";


const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: Colors.black,
                    },
                }}
                initialRouteName="Splash"
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Onboarding1" component={Onboarding1} />
                <Stack.Screen name="Onboarding2" component={Onboarding2} />
                <Stack.Screen name="Onboarding3" component={Onboarding3} />
                <Stack.Screen name="Onboarding4" component={Onboarding4} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="Testing" component={Testing} />
                <Stack.Screen name="EditingPhoto" component={EditingPhoto} />



            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
