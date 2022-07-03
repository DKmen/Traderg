import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

import { FontAwesome } from '@expo/vector-icons';

export default function PreferencePage() {
    return (
        <Box safeArea w='full' bgColor='#f0f0f0' p={6} px={4} display='flex' flexDir="column" h='full'>
            <Box my={4}>
                <Text color='#3c2366' mb={4} fontSize={24} bold>Overview</Text>
                <Text color='#2f2f2f' fontSize={12} textAlign='justify'>PRO-DAILY is the intraday/swing based trade management service where the clients can enjoy the profit in their trade account. We do research based trade only with your prior permissons. You can see all trades in your monbile applications.</Text>
            </Box>
            <Box my={4}>
                <Text color='#3c2366' mb={4} fontSize={24} bold>Features</Text>
                <Box display='flex' flexDir='column'>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Box mb={0}>
                            <FontAwesome name="dot-circle-o" size={16} color="#2f2f2f" />
                        </Box>
                        <Text flex={1} ml={2} >Minimum Capital - 250000/-</Text>
                    </Box>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Box mb={0}>
                            <FontAwesome name="dot-circle-o" size={16} color="#2f2f2f" />
                        </Box>
                        <Text flex={1} ml={2} >Tenure - 5-10 years</Text>
                    </Box>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Box mb={0}>
                            <FontAwesome name="dot-circle-o" size={16} color="#2f2f2f" />
                        </Box>
                        <Text flex={1} ml={2} >Divident - 12%</Text>
                    </Box>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Box mb={0}>
                            <FontAwesome name="dot-circle-o" size={16} color="#2f2f2f" />
                        </Box>
                        <Text flex={1} ml={2} >Preference Share Value - 10/- each</Text>
                    </Box>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Box mb={0}>
                            <FontAwesome name="dot-circle-o" size={16} color="#2f2f2f" />
                        </Box>
                        <Text flex={1} ml={2} >Capital gain value - upto 100/- each</Text>
                    </Box>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Box mb={0}>
                            <FontAwesome name="dot-circle-o" size={16} color="#2f2f2f" />
                        </Box>
                        <Text flex={1} ml={2} >TDS applicable</Text>
                    </Box>
                </Box>
            </Box>
            <Button bgColor='#0596cd' borderRadius='md' mx={4} size='lg'>I Am Interested</Button>
        </Box>
    );
}