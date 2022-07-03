import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

import { Ionicons } from '@expo/vector-icons';

export default function AgreementPage() {
    return (
        <Box safeArea w='full' bgColor='#f0f0f0' p={6} pb={0} display='flex' flexDir="column" h='full'>
            <Box borderTopRadius='md' bgColor='white' w='full' flex={1} px={4}>
                <Box display='flex' flexDirection='row' alignItems='center' py={2}>
                    <Ionicons name="md-eye-outline" size={40} color="#0596cd" />
                    <Text color='#0596cd' fontSize='xl' ml={4} mb={1}>View Agreement</Text>
                </Box>
                <Divider />
                <Box display='flex' flexDirection='row' alignItems='center' py={4}>
                    <Text color='black' bold fontSize='xl' mr={6}>Status</Text>
                    <Button bgColor='#0596cd' borderRadius='md' onPress={() => {}} px={10} size='lg'>Draft</Button>
                </Box>
            </Box>
        </Box>
    );
}