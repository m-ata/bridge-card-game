import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo, MaterialIcons } from "@expo/vector-icons";
import CardBoardScreen from '../Screens/CardBoard'
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator

            tabBarOptions={{
                activeTintColor:"#000BAA",
                inactiveTintColor:"#000BAA",

                style: {
                    backgroundColor: "#F7F9F9",
                    borderTopWidth: 0,
                },
            }}>
            <Tab.Screen
                name="Results"
                component={CardBoardScreen}
                options={() => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="gamepad" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Chat"
                component={CardBoardScreen}

                options={() => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="chat" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Exit"
                component={CardBoardScreen}

                options={() => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="exit-to-app" color={color} size={size} />
                    ),
                })}
            />

        </Tab.Navigator>
    );
};

export default TabNavigation;