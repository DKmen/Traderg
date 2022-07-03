import React from "react";
import { NativeBaseProvider } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HoldingDetailsPage from "./HoldingDetailsScreen";
import HoldingListPage from "./HoldingListSceen";
import HoldingOverviewPage from "./HoldingScreen";

import { Pressable, Image } from "react-native";

import OffIcon from "../../../assets/logo/off.png";

const Stack = createNativeStackNavigator();

export default function Holding() {
    return (
        <Stack.Navigator initialRouteName="HoldingOverviewPage">
            <Stack.Screen
                name="HoldingOverviewPage"
                options={{
                    headerTitle: "Holding",
                    contentStyle: { backgroundColor: "#e1e1e1" },
                    headerRight: () => (
                        <>
                            <Pressable>
                                <Image source={OffIcon} style={{ width: 30, height: 30 }} />
                            </Pressable>
                        </>
                    ),
                }}
                component={HoldingOverviewPage}
            />
            <Stack.Screen
                options={{
                    headerTitle: "Holding",
                    contentStyle: { backgroundColor: "#e1e1e1" },
                    headerRight: () => (
                        <>
                            <Pressable>
                                <Image source={OffIcon} style={{ width: 30, height: 30 }} />
                            </Pressable>
                        </>
                    ),
                }}
                name="HoldingListPage"
                component={HoldingListPage}
            />
            <Stack.Screen
                options={{
                    headerTitle: "Holding",
                    contentStyle: { backgroundColor: "#e1e1e1" },
                    headerRight: () => (
                        <>
                            <Pressable>
                                <Image source={OffIcon} style={{ width: 30, height: 30 }} />
                            </Pressable>
                        </>
                    ),
                }}
                name="HoldingDetailsPage"
                component={HoldingDetailsPage}
            />
        </Stack.Navigator>
    );
}
