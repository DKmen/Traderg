import React from "react";
import { Box, Button, Divider, Text, Center, Input, Stack, Icon, ScrollView } from "native-base";
import { Dimensions, Image } from "react-native";

import CustomTextField from "../components/CustomTextField";

import AddressIcon from "../../assets/logo/Profile/address.png";
import EmailIcon from "../../assets/logo/Profile/email.png";
import MobileIcon from "../../assets/logo/Profile/mobile.png";
import NameIcon from "../../assets/logo/Profile/name.png";

export default function ProfilePage() {
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
                        <CustomTextField name="Name" icon={NameIcon} />
                        <CustomTextField name="Address" icon={AddressIcon} />
                        <CustomTextField name="City" icon={AddressIcon} />
                        <CustomTextField name="State" icon={AddressIcon} />
                        <CustomTextField name="Pincode" icon={AddressIcon} />
                        <CustomTextField name="Geolocation" icon={AddressIcon} />
                        <CustomTextField name="Mobile" icon={MobileIcon} />
                        <CustomTextField name="Email" icon={EmailIcon} />
                        <Button bgColor='#0596cd' borderRadius='md' px={10} size='lg'>Submit</Button>
                    </Stack>
                </Box>
            </Box>
        </ScrollView>
    );
}
