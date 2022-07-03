import React from "react";
import {
    Box,
    Button,
    Divider,
    ScrollView,
    Text
} from "native-base";

import TradingSegmentOverviewComponents from "../../components/TradingOverviewComponent";
import { Dimensions } from "react-native";

export default function TradingSegmentOverviewPage(props) {
    return (
        <ScrollView>
            <Box safeArea w='full' minH={Dimensions.get('window').height} bgColor='#f0f0f0' pt={6} px={6} display='flex' flexDir="column">
                <Box my={2}>
                    <TradingSegmentOverviewComponents onPress={()=>props.navigation.navigate('AccountOpenPage')}/>
                    <TradingSegmentOverviewComponents onPress={()=>props.navigation.navigate('AccountOpenPage')}/>
                    <TradingSegmentOverviewComponents onPress={()=>props.navigation.navigate('AccountOpenPage')}/>
                </Box>
            </Box>
        </ScrollView>
    );
}