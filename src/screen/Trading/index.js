import React from "react";
import { NativeBaseProvider } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountOpenPage from "./AccountOpenScreen";
import TradingOverviewPage from "./TradingOverviewScreen";
import TradingSegmentOverviewPage from "./TradingSegmentOverviewScreen";
import { Pressable, Image } from "react-native";

import OffIcon from "../../../assets/logo/off.png"

const Stack = createNativeStackNavigator();

export default function Trading() {
    return (
        <Stack.Navigator initialRouteName="TradingOverviewPage">
            <Stack.Screen
                options={{
                    headerTitle: 'Trading', contentStyle: { backgroundColor: "#e1e1e1" }, headerRight: () => <>
                        <Pressable>
                            <Image source={OffIcon} style={{ width: 30, height: 30 }} />
                        </Pressable>
                    </>
                }}
                name="TradingOverviewPage"
                component={TradingOverviewPage}
            />
            <Stack.Screen
                options={{
                    headerTitle: 'Trading', contentStyle: { backgroundColor: "#e1e1e1" }, headerRight: () => <>
                        <Pressable>
                            <Image source={OffIcon} style={{ width: 30, height: 30 }} />
                        </Pressable>
                    </>
                }}
                name="TradingSegmentOverviewPage"
                component={TradingSegmentOverviewPage}
            />
            <Stack.Screen
                options={{
                    headerTitle: 'Trading', contentStyle: { backgroundColor: "#e1e1e1" }, headerRight: () => <>
                        <Pressable>
                            <Image source={OffIcon} style={{ width: 30, height: 30 }} />
                        </Pressable>
                    </>
                }}
                name="AccountOpenPage"
                component={AccountOpenPage}
            />
        </Stack.Navigator>
    );
}
