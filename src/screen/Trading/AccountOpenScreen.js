import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

export default function AccountOpenPage() {
    return (
        <Box safeArea w='full' bgColor='#f0f0f0' p={6} display='flex' flexDir="column" h='full'>
            <Box my={4}>
                <Text color='#3c2366' mb={2} fontSize={24} bold>Overview</Text>
                <Text color='#2f2f2f' fontWeight='light' fontSize={16} textAlign='justify'>Introduction of arihant </Text>
            </Box>
            <Box flex={1} display='flex' alignItems='center' justifyContent='center'>
                <Button bgColor='#0596cd' borderRadius='md' px={10} size='lg'>Open Your Trade Account</Button>
            </Box>
        </Box>
    );
}