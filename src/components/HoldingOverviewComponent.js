import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";


export default function HoldingOverviewComponents(props) {
    return (
        <Box borderRadius={8} my={2} bgColor='white' display='flex' flexDir='column' alignItems='center'>
            <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={4} color='#59487d' fontSize={12} bold>Bucket ID</Text>
                <Text flex={2}>: #62049</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={4} color='#59487d' fontSize={12} bold>Min. Value</Text>
                <Text flex={2}>: Rs 1,000</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={4} color='#59487d' fontSize={12} bold>Tenure</Text>
                <Text flex={2}>: 3 Months</Text>
            </Box>
            <Divider />
            <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                <Text flex={4} color='#59487d' fontSize={12} bold>Fixed Interest</Text>
                <Text flex={2}>: 1% Monthly</Text>
            </Box>
            <Button bgColor='#0596cd' onPress={props.onPress} my={2} borderRadius='md' px={8} size='xs'>Participate</Button>
        </Box>
    );
}