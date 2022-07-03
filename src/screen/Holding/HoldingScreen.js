import React from "react";
import {
    Box,
    Button,
    Divider,
    Text
} from "native-base";

export default function HoldingOverviewPage(props) {
    return (
        <Box safeArea w='full' bgColor='#f0f0f0' p={4} display='flex' flexDir="column" h='full'>
            <Text color='#3c2366' my={2} fontSize={20} bold textAlign='center'>Risk Free Investment</Text>
            <Box my={2}>
                <Text color='#3c2366' mb={4} fontSize={20} bold>Overview</Text>
                <Text color='#2f2f2f' fontSize={12} textAlign='justify'>PRO-DAILY is the intraday/swing based trade management service where the clients can enjoy the profit in their trade account. We do research based trade only with your prior permissons. You can see all trades in your monbile applications.</Text>
            </Box>
            <Box my={2}>
                <Text color='#3c2366' mb={4} fontSize={24} bold>Features</Text>
                <Box py={2} borderRadius={8} bgColor='white' display='flex' flexDir='column'>
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Min Investment</Text>
                        <Text flex={3} fontSize={12}>: 1000</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Time Frame</Text>
                        <Text flex={3} fontSize={12}>: Quarterly / Half Yearly / Yearly</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Withdrawal</Text>
                        <Text flex={3} fontSize={12}>: Any Day</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Passbook</Text>
                        <Text flex={3} fontSize={12}>: Wallat Based</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Tax</Text>
                        <Text flex={3} fontSize={12}>: TDS Applicable</Text>
                    </Box>
                    <Divider />
                    <Box display='flex' px={2} py={1} flexDir='row' alignItems='center' justifyContent='center'>
                        <Text flex={2} color='#027aa7' bold>Security</Text>
                        <Text flex={3} fontSize={12}>: 100%</Text>
                    </Box>
                </Box>
            </Box>
            <Button bgColor='#0596cd' borderRadius='md'  onPress={()=>props.navigation.navigate('HoldingListPage')} mx={4} size='lg'>Continue</Button>
        </Box>
    );
}