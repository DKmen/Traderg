import React from "react";
import { Box, Button, Divider, Text, Center, Input, Stack, Icon } from "native-base";

import { Image } from "react-native";

export default function CustomTextField(props) {
    return (
        <Input
            InputLeftElement={
                <Box borderRightWidth={2} h={10} w={12} borderColor='muted.400' display='flex' alignItems='center' justifyContent='center'>
                    <Icon
                        as={<Image source={props.icon} style={{ resizeMode: 'center' }} />}
                        size={5}
                        mx="2"
                        color="muted.400"
                    />
                </Box>
            }
            size='lg'
            placeholder={props.name}
            {...props}
        />
    );
}
