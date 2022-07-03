import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

export default function TradingOverviewPage(props) {
    return (
        <Box safeArea w='full' bgColor='#f0f0f0' p={6} display='flex' flexDir="column" h='full'>
            <Box my={4}>
                <Text color='#3c2366' mb={4} fontSize={24} bold>Overview</Text>
                <Text color='#2f2f2f' fontSize={12} textAlign='justify'>PRO-DAILY is the intraday/swing based trade management service where the clients can enjoy the profit in their trade account. We do research based trade only with your prior permissons. You can see all trades in your monbile applications.</Text>
            </Box>
            <Box my={4}>
                <Text color='#3c2366' mb={4} fontSize={24} bold>Features</Text>
                <Box py={2} borderRadius={8} bgColor='white' display='flex' flexDir='column'>
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={1} color='#027aa7' bold>Min Investment</Text>
                        <Text flex={1}>: 1 Lakh</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={1} color='#027aa7' bold>Time Frame</Text>
                        <Text flex={1}>: Daily / Weekly</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={1} color='#027aa7' bold>Withdrawal</Text>
                        <Text flex={1}>: Any Day</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={1} color='#027aa7' bold>Trade Profit</Text>
                        <Text flex={1}>: Upto 2-5% monthly</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={2} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={1} color='#027aa7' bold>Risk</Text>
                        <Text flex={1} fontSize={12}>: Min depends on trades</Text>
                    </Box>
                </Box>
            </Box>
            <Button bgColor='#0596cd' borderRadius='md' onPress={()=>props.navigation.navigate('TradingSegmentOverviewPage')} mx={4} size='lg'>Select Trading Segment</Button>
        </Box>
    );
}