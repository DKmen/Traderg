import React from "react";
import { Box, Button, Divider, Text, Center, Input, Stack, Icon, ScrollView } from "native-base";
import { Dimensions, Image } from "react-native";

export default function OrderPage() {
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
                        <Stack direction='row' divider={<Divider />}>
                            <Box flex={1}>
                                <Text textAlign='center' color='#26a4d4' fontSize={16}>My Investment</Text>
                                <Text textAlign='center' color='#210354' fontSize={24} bold>1000</Text>
                            </Box>
                            <Box flex={1}>
                                <Text textAlign='center' color='#26a4d4' fontSize={16}>My Earning</Text>
                                <Text textAlign='center' color='#210354' fontSize={24} bold>1000</Text>
                                <Text textAlign='center' color='#210354' fontSize={16} >Payout</Text>
                            </Box>
                        </Stack>
                        <Box w='full' borderColor='#0596cd' p={4} borderRadius='md' bgColor='#ccf1ff' borderWidth={1}>
                            <Stack direction='row' space={6} my={1}>
                                <Text color='#2f2f2f'>#56204</Text>
                                <Text color='#2f2f2f'>20/05/2022 &nbsp; &nbsp; 01:10 pm</Text>
                            </Stack>
                            <Stack direction='row' space={6} my={1}>
                                <Text color='#2f2f2f'>INR 9000</Text>
                                <Text color='#2f2f2f'>9500</Text>
                            </Stack>
                            <Stack direction='row' space={2} my={1}>
                                <Text color='#2f2f2f'>Declaration Data :</Text>
                                <Text color='#2f2f2f'>20/05/2022  01:10 pm</Text>
                            </Stack>
                        </Box>
                        <Box w='full' borderColor='#0596cd' p={4} borderRadius='md' bgColor='#ccf1ff' borderWidth={1}>
                            <Stack direction='row' space={6} my={1}>
                                <Text color='#2f2f2f'>#56204</Text>
                                <Text color='#2f2f2f'>20/05/2022 &nbsp; &nbsp; 01:10 pm</Text>
                            </Stack>
                            <Stack direction='row' space={6} my={1}>
                                <Text color='#2f2f2f'>INR 9000</Text>
                                <Text color='#2f2f2f'>9500</Text>
                            </Stack>
                            <Stack direction='row' space={2} my={1}>
                                <Text color='#2f2f2f'>Declaration Data :</Text>
                                <Text color='#2f2f2f'>20/05/2022  01:10 pm</Text>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </ScrollView>
    );
}
