import React from "react";
import { Box, Button, Divider, Text, Center, Input, Stack, Icon, ScrollView } from "native-base";
import { Dimensions, Image } from "react-native";

import CustomTextField from "../components/CustomTextField";

import AadharIcon from "../../assets/logo/KYC/aadhar.png";
import Aadhar1Icon from "../../assets/logo/KYC/aadhar1.png";
import BankIcon from "../../assets/logo/KYC/bank.png";
import PanIcon from "../../assets/logo/KYC/pan.png";
import Pan1Icon from "../../assets/logo/KYC/pan1.png";

export default function KycPage() {
    return (
        <ScrollView>
            <Box
                safeArea
                w="full"
                bgColor="#f0f0f0"
                p={6}
                pb={0}
                display="flex"
                flexDir="column"
                h="full"
                minH={Dimensions.get('screen').height}
            >
                <Box
                    borderTopRadius="md"
                    bgColor="white"
                    w="full"
                    flex={1}
                    px={4}
                    py={10}
                >
                    <Stack space={4}>
                        <CustomTextField name="Aadhaar Number" icon={AadharIcon} />
                        <CustomTextField name="Aadhaar Photo" icon={Aadhar1Icon} />
                        <CustomTextField name="PAN Number" icon={PanIcon} />
                        <CustomTextField name="PAN Photo" icon={Pan1Icon} />
                        <CustomTextField name="Cancelled Cheque/Bank Stmt" icon={BankIcon} />
                        <Stack direction='row' alignItems='center' space={4}>
                            <Text bold fontSize='lg'>KYC Status</Text>
                            <Box borderColor='#0596cd' px={4} py={1} borderRadius='md' bgColor='#ccf1ff' borderWidth={1}>
                                <Text color='#0596cd'>Approved</Text>
                            </Box>
                        </Stack>
                        <Stack direction='row' alignItems='center' space={4}>
                            <Text bold fontSize='lg'>Last Updated On</Text>
                            <Text color='#0596cd' fontSize='lg' bold>21.05.2022</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </ScrollView>
    );
}
