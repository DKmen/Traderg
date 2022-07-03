import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

export default function HoldingDetailsPage() {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
        <Box safeArea w='full' bgColor='#f0f0f0' p={4} display='flex' flexDir="column" h='full'>
            <Box my={4}>
                <Box py={2} borderRadius={8} bgColor='white' display='flex' flexDir='column'>
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Amount</Text>
                        <Text flex={3} fontSize={12}>: 1000</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Starting Date</Text>
                        <Text flex={3} fontSize={12}>: {`${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()}`}</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Maturity Date</Text>
                        <Text flex={3} fontSize={12}>: {`${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()}`}</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Maturity Amount</Text>
                        <Text flex={3} fontSize={12}>: 5000</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}