import React from "react";
import { View, Text, FlatList, Image, Dimensions, StatusBar, TouchableNativeFeedback, StyleSheet, Animated } from "react-native"
import { useNavigation } from "@react-navigation/native";

import images from "../../assets/images";
import {
    LOGINSCREEN
} from '../../routers/ScreenNames'

const { width, height } = Dimensions.get('window')

export default (props) => {
    const navigate = useNavigation()

    const introImg = [
        {
            id: 1,
            source: images.intro1
        },
        {
            id: 2,
            source: images.intro2
        },
        {
            id: 3,
            source: images.intro3
        },
        {
            id: 4,
            source: images.intro4
        },
    ]

    let scrollX
    scrollX = new Animated.Value(0)

    const renderImage = () => {
        return (
            <FlatList 
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={introImg}
                keyExtractor={(item) => item.id}
                renderItem={( {item, index} ) => {
                    const isEnd = index === introImg.length - 1

                    return (
                        <View>
                            {isEnd ? 
                                <TouchableNativeFeedback
                                    onPress={() => navigate.navigate(LOGINSCREEN)}
                                >
                                    <Image 
                                        source={item.source}
                                        resizeMode="cover"
                                        style={{width, height: height, overflow: 'visible'}}
                                    />
                                </TouchableNativeFeedback> : 
                                <Image 
                                    source={item.source}
                                    resizeMode="cover"
                                    style={{width, height: height, overflow: 'visible'}}
                                />
                            }
                        </View>
                 )}
                }
                style={{position: "relative"}}
                onScroll={
                    Animated.event([
                        {nativeEvent: {contentOffset: {x: scrollX}}},
                    ],
                        {useNativeDriver: false}
                    )
                
                }
                
            />
        )
    }

    const renderDots = () => {
        const stepPosition = Animated.divide(scrollX, width) 
        return (
            <View style={styles.dots}>
                {introImg.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.5, 1, 0.5],
                        extrapolate: 'clamp',
                    })
                    return (
                        <Animated.View key={index} style={[styles.dot, {opacity}]}></Animated.View>
                    )
                })}
            </View>
        )
    }

    return (
        <View>
            {renderImage()}
            {renderDots()}
            <StatusBar barStyle="light-content" />
        </View>
    )

}
const styles = StyleSheet.create({
    dots: {
        position: "absolute",
        bottom: 38,
        left: width * 0.4,
        right: width * 0.4,
        flexDirection: "row",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: 'white',
        marginRight: 10
    }
})