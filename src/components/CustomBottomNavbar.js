import { Box, ScrollView, Stack } from "native-base";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from "react-native";

import HomeIcon from '../../assets/logo/Bottom/home.png'
import AccountIcon from '../../assets/logo/Bottom/account.png'
import OrderIcon from '../../assets/logo/Bottom/order.png'
import ChartIcon from '../../assets/logo/Bottom/chart.png'
import MenuIcon from '../../assets/logo/Bottom/menu.png'

const CustomBottomNavbar = (props) => {
    return <Box minH={Dimensions.get('screen').height} w='full' position='relative'>
        <ScrollView>
            {props.children}
        </ScrollView>
        <View style={styles.oval} />
        <Box position='absolute' height={120} bottom={0} left={0} w='full' zIndex={2} >
            <Stack alignItems='center' direction='row' justifyContent='space-around'>
                <Image
                    source={HomeIcon}
                    style={{ resizeMode: "contain", width: 20 }}
                />
                <Image
                    source={AccountIcon}
                    style={{ resizeMode: "contain", width: 24, marginBottom: 10 }}
                />
                <Image
                    source={OrderIcon}
                    style={{ resizeMode: "contain", width: 28, marginBottom: 20 }}
                />
                <Image
                    source={ChartIcon}
                    style={{ resizeMode: "contain", width: 24, marginBottom: 10 }}
                />
                <Image
                    source={MenuIcon}
                    style={{ resizeMode: "contain", width: 20 }}
                />
            </Stack>
        </Box>
    </Box>;
};

const styles = StyleSheet.create({
    oval: {
        position: 'absolute',
        bottom: 0,
        right: Dimensions.get('screen').width / 2 - 40,
        width: 80,
        height: 110,
        borderTopRightRadius: 120,
        borderTopLeftRadius: 120,
        backgroundColor: "#200353",
        borderWidth: 2,
        paddingHorizontal: 40,
        borderColor: '#0596cd',
        transform: [{ scaleX: 4.8 }],
    },
    oval2: {
        position: 'absolute',
        bottom: 0,
        right: Dimensions.get('screen').width / 2 - 40,
        width: 80,
        height: 110,
        borderTopRightRadius: 120,
        borderTopLeftRadius: 120,
        backgroundColor: "#200353",
        borderWidth: 2,
        paddingHorizontal: 40,
        borderColor: '#0596cd',
        transform: [{ scaleX: 4.8 }],
    },
});

export default CustomBottomNavbar;