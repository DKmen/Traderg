import React from "react";
import { Box, Center, ScrollView, Stack, Text, Button } from "native-base";
import { Dimensions, Image, ImageBackground } from "react-native";

import BackgroundImage from "../../assets/image/background.png";
import HeaderImage from "../../assets/logo/Login/header.png";
import SMSIcon from "../../assets/logo/OTP/sms.png";

import OTPTextInput from "react-native-otp-textinput";

export default function OtpPage() {
    return (
        <ScrollView>
            <Box
                w="full"
                display="flex"
                flexDir="column"
                minH={Dimensions.get('screen').height - 20}
            >
                <ImageBackground source={BackgroundImage} resizeMode="cover" style={{ flex: 1 }}>
                    <Center width='full' px={4} pt={14}>
                        <Image source={HeaderImage} style={{ resizeMode: 'contain', width: 220, marginBottom: -180 }} />
                        <Image source={SMSIcon} style={{ resizeMode: 'contain', width: 140, marginBottom: -140 }} />
                        <Box w={240} borderBottomWidth={1} borderBottomColor="#1a7ca1" p={4} pb={0} display='flex' alignItems='center' justifyContent='center' mb={2}>
                            <Text color='white' fontSize={24} px={4}>Verification</Text>
                            <Text color='#1a7ca1' fontSize={16} py={4}>You will get OTP via SMS</Text>
                        </Box>
                        <OTPTextInput inputCount={4} tintColor="#1a7ca1" offTintColor="#1a7ca1" textInputStyle={{ borderWidth: 1, borderRadius: 10, backgroundColor: '#fff' }} />
                        <Button bgColor='#0596cd' borderRadius='md' width={240} my={4} px={10} size='lg'>Submit</Button>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text fontSize={16} textAlign="center" color="white">
                                Did’t receive the verification OTP ?
                            </Text>
                            <Text fontSize={16} textAlign="center" color="#1a7ca1">
                                Resend OTP
                            </Text>
                        </Stack>
                    </Center>
                </ImageBackground>
            </Box>
        </ScrollView>
    );
}
