import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import Photo from "./screens/Photo/Photo";
import { Colors } from "./Utils/Colors";
import Videos from "./screens/Videos/Videos";
import Settings from "./screens/Settings/Settings";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: Colors.black,
                },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: "Photo",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="photo" color={color} size={size} />
                    ),
                }}
                name="Photo"
                component={Photo}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: "Video",
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="video" color={color} size={size} />
                    ),
                }}
                name="Videos"
                component={Videos}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: "Setting",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" color={color} size={size} />
                    ),
                }}
                name="Settings"
                component={Settings}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
