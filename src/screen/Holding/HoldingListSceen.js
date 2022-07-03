import React from "react";
import {
    Box,
    Button,
    Divider,
    ScrollView,
    Text
} from "native-base";

import HoldingOverviewComponents from "../../components/HoldingOverviewComponent";
import { Dimensions } from "react-native";

export default function HoldingListPage(props) {
    return (
        <ScrollView>
            <Box safeArea w='full' minH={Dimensions.get('window').height} bgColor='#f0f0f0' pt={6} px={6} display='flex' flexDir="column">
                <Box my={2}>
                    <HoldingOverviewComponents onPress={()=>props.navigation.navigate('HoldingDetailsPage')}/>
                    <HoldingOverviewComponents  onPress={()=>props.navigation.navigate('HoldingDetailsPage')}/>
                </Box>
            </Box>
        </ScrollView>
    );
}