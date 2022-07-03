import React from "react";
import { Box, Button, Divider, Text, Center, Input } from "native-base";
import {
    Dimensions,
    Animated,
    Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
    <Box px={4} py={10} display='flex' flexDirection='column' alignItems='center' borderColor='#0596cd' borderWidth={1} borderBottomRadius={10}>
        <Input placeholder="Input" isFullWidth={true} size='sm' />
        <Button bgColor='#0596cd' mt={4} borderRadius='md' onPress={() => { }} px={10} size='sm'>Post</Button>
    </Box>
);

const SecondRoute = () => (
    <Box px={4} py={10} display='flex' flexDirection='column' alignItems='center' borderColor='#0596cd' borderWidth={1} borderBottomRadius={10}>
    </Box>
);

const initialLayout = {
    width: Dimensions.get("window").width,
};

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

function Example() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: "first",
            title: "Your Query",
        },
        {
            key: "second",
            title: "History",
        },
    ]);

    const renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <Box flexDirection="row">
                {props.navigationState.routes.map((route, i) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });
                    const color = index === i ? "#fff" : "#0596cd";
                    const backgroundColor = index === i ? "#0596cd" : "#ecfaff";
                    return (
                        <Box
                            alignItems="center"
                            backgroundColor={backgroundColor}
                            borderTopRadius={10}
                            p="3"
                        >
                            <Pressable
                                onPress={() => {
                                    console.log(i);
                                    setIndex(i);
                                }}
                            >
                                <Animated.Text
                                    style={{
                                        color,
                                    }}
                                >
                                    {route.title}
                                </Animated.Text>
                            </Pressable>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    return (
        <TabView
            navigationState={{
                index,
                routes,
            }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

export default function AskToExpertPage() {
    return (
        <Box
            safeArea
            w="full"
            bgColor="#f0f0f0"
            p={6}
            pb={0}
            display="flex"
            flexDir="column"
            h="full"
        >
            <Box borderTopRadius="md" bgColor="white" w="full" flex={1} px={4} py={10}>
                <Example />
            </Box>
        </Box>
    );
}
