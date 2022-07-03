import React from "react";
import {
    Box,
    Button,
} from "native-base";

import { Image } from "react-native"
import Logo from '../../assets/logo/logo.png'

import { FontAwesome } from '@expo/vector-icons';

export default function MainScreenPage(props) {
    console.log(props)
    return (
        <Box safeArea w='full' display='flex' flexDir="column" alignItems='center' justifyContent='center' flex={1}>
            <Image source={Logo} alt="" style={{ resizeMode: 'contain', width: 240 }} />
            <Box display='flex' flexDir='row' maxW={240} marginY={2} mt={-16}>
                <FontAwesome name="dot-circle-o" size={40} color="#0596cd" />
                <Button bgColor='#0596cd'  onPress={()=>props.navigation.navigate('Trading')} ml={2} borderRadius='full' size='lg' flex={1}>TRADING</Button>
            </Box>
            <Box display='flex' flexDir='row' maxW={240} marginY={2}>
                <FontAwesome name="dot-circle-o" size={40} color="#0596cd" />
                <Button bgColor='#0596cd' onPress={()=>props.navigation.navigate('Holding')} ml={2} borderRadius='full' size='lg' flex={1}>HOLDING</Button>
            </Box>
            <Box display='flex' flexDir='row' maxW={240} marginY={2}>
                <FontAwesome name="dot-circle-o" size={40} color="#0596cd" />
                <Button bgColor='#0596cd' onPress={()=>props.navigation.navigate('PreferencePage')} ml={2} borderRadius='full' size='lg' flex={1}>PREFERENCE SHARES</Button>
            </Box>
        </Box>
    );
}