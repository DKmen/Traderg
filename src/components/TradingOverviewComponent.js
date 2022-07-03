import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

export default function TradingSegmentOverviewComponents(props) {
    return (
        <Box borderRadius={8} my={4} bgColor='white' display='flex' flexDir='column' alignItems='center'>
            <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={1} color='#59487d' fontSize={12} bold>Branch ID</Text>
                <Text flex={1}>: 9191</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={1} color='#59487d' fontSize={12} bold>Capital</Text>
                <Text flex={1}>: 1,00,00,000</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={1} color='#59487d' fontSize={12} bold>Segment</Text>
                <Text flex={1}>: Equity Cash</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={1} color='#59487d' fontSize={12} bold>Type</Text>
                <Text flex={1}>: Holding</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={1} color='#59487d' fontSize={12} bold>Rish / Reward</Text>
                <Text flex={1}>: 10% / 90%</Text>
            </Box>
            <Button bgColor='#0596cd' my={4} onPress={props.onPress} borderRadius='md' px={8} size='xs'>Participate</Button>
        </Box>
    );
}