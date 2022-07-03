import React from "react";
import { Box, Button, Divider, Text, Center, Input, Stack, Icon, ScrollView } from "native-base";
import { Dimensions, Image } from "react-native";

import CustomTextField from "../components/CustomTextField";

import BankIcon from "../../assets/logo/Bank/bank.png";
import AccountIcon from "../../assets/logo/Bank/account.png";
import IFSCIcon from "../../assets/logo/Bank/ifsc.png";
import BranchIcon from "../../assets/logo/Bank/branch.png";

export default function BankPage() {
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
                        <CustomTextField name="Bank" icon={BankIcon} />
                        <CustomTextField name="Accout" icon={AccountIcon} />
                        <CustomTextField name="IFSC" icon={IFSCIcon} />
                        <CustomTextField name="Branch" icon={BranchIcon} />
                        <Button bgColor='#0596cd' borderRadius='md' px={10} size='lg'>Submit</Button>
                    </Stack>
                </Box>
            </Box>
        </ScrollView>
    );
}
