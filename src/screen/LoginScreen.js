import React from "react";
import { Box, Center, ScrollView, Stack, Text } from "native-base";
import { Dimensions, Image, ImageBackground } from "react-native";

import BackgroundImage from "../../assets/image/background.png";
import HeaderImage from "../../assets/logo/Login/header.png";
import IndiaLogo from "../../assets/logo/Login/india.png";
import GoogleLogo from "../../assets/logo/Login/google.png";
import MailLogo from "../../assets/logo/Login/mail.png";

import CustomTextField from "../components/CustomTextField";

export default function LoginPage() {
    return (
        <ScrollView>
            <Box
                w="full"
                display="flex"
                flexDir="column"
                minH={Dimensions.get("screen").height - 20}
            >
                <ImageBackground
                    source={BackgroundImage}
                    resizeMode="cover"
                    style={{ flex: 1 }}
                >
                    <Center width="full" px={4} pt={14}>
                        <Image
                            source={HeaderImage}
                            style={{ resizeMode: "contain", width: 240, marginBottom: -40 }}
                        />
                        <Box
                            w={240}
                            borderBottomWidth={1}
                            borderBottomColor="#1a7ca1"
                            p={4}
                            pb={0}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text
                                color="white"
                                fontSize={20}
                                borderBottomWidth={4}
                                px={4}
                                marginBottom="-0.5"
                                borderBottomColor="#1a7ca1"
                            >
                                Login
                            </Text>
                        </Box>
                        <Stack space={6} w="full" marginTop={4}>
                            <CustomTextField
                                borderRadius="full"
                                backgroundColor="#fff"
                                name="Continue With Google"
                                icon={GoogleLogo}
                            />
                            <CustomTextField
                                borderRadius="full"
                                backgroundColor="#fff"
                                name="Continue With Email"
                                icon={MailLogo}
                            />
                            <Text fontSize={20} textAlign="center" px={4} color="#1a7ca1">
                                OR
                            </Text>
                            <CustomTextField
                                borderRadius="full"
                                backgroundColor="#fff"
                                name="Continue With Mobile Number"
                                icon={IndiaLogo}
                            />
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text
                                    fontSize={16}
                                    textAlign="center"
                                    color="white"
                                    flexWrap="wrap"
                                >
                                    I agree to the &nbsp;
                                </Text>
                                <Text fontSize={16} textAlign="center" color="#1a7ca1">
                                    Terms & Conditions
                                </Text>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                marginTop={-5}
                            >
                                <Text fontSize={16} textAlign="center" color="white">
                                    and &nbsp;
                                </Text>
                                <Text fontSize={16} textAlign="center" color="#1a7ca1">
                                    and Privacy Policy
                                </Text>
                            </Stack>
                        </Stack>
                    </Center>
                </ImageBackground>
            </Box>
        </ScrollView>
    );
}
