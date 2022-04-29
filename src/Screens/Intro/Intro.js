import React, {useState} from "react";
import { 
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    StatusBar,
    TouchableNativeFeedback,
    StyleSheet,
    Animated 
} from "react-native"
import { useNavigation } from "@react-navigation/native";

import images from "../../assets/images";
import {
    SIGNINSCREEN,
    SIGNUPSCREEN
} from '../../routers/ScreenNames'
import Login from "../Authen/Login";
import Button from "../../components/Button";
import R from "../../assets/R";

const { width, height } = Dimensions.get('window')

export default (props) => {
    const navigate = useNavigation()

    const [hideDot, setHideDot] = useState(false)

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
                                    // onPress={() => renderSignInUp()}
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
                ListFooterComponent={renderSignInUp()}
                
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
                        
                        <Animated.View key={index} style={[styles.dot, {opacity}]}>
                            {console.log(index)}
                        </Animated.View>
                    )
                })}
            </View>
        )
    }

    const renderSignInUp = () => {
        return (
            <View style={{flex: 1, width: width, backgroundColor: '#fff', justifyContent: "center", alignItems: "center"}}>
                <View style={{flex: 1, width: width,  alignItems: "center", justifyContent: "center"}}>
                    <View style={{paddingTop: 60}} >
                        <Image 
                            source={images.login1}
                            resizeMode="cover"
                            style={{width: 350, height: 365, borderRadius: 30}}
                        />
                    </View>
                </View>
                <View style={{flex: 1, width: width}}>
                    <View style={{flex: 2, width: width}}>
                        <View style={{marginTop: 20, paddingHorizontal: 32}}>
                            <Button 
                                title="Sign In" 
                                backgroundColor={R.colors.main} 
                                containerStyle={{height: 56, borderRadius: 20}} 
                                txtStyle={{color: '#fff'}}
                                onPress={() => navigate.navigate(SIGNINSCREEN)}
                            />
                            <Button 
                                title="Sign Up" 
                                backgroundColor={R.colors.gray6} 
                                containerStyle={{height: 56, borderRadius: 20}} 
                                txtStyle={{color: "#000"}} 
                                onPress={() => navigate.navigate(SIGNUPSCREEN)}
                            />
                        </View>
                    </View>
                    <View style={{flex: 2, width: width, marginTop: 32}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <View style={styles.line}></View>
                            <Text style={{color: R.colors.gray}}>Or connect with</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <View style={{flex: 2, overflow: "hidden"}}>
                                <Image
                                    source={images.login2}
                                    resizeMode="contain"
                                    style={{
                                        width: 380,
                                        height: 300,
                                        position: "relative",
                                        right: '70%',
                                        // zIndex: -1000,
                                        
                                    }}
                                />

                            </View>
                            <View style={{flex: 2, flexDirection: "row", marginTop: 24, paddingLeft: 12}}>
                                <Image style={{marginRight: 12}} source={images.facebook} />
                                <Image style={{marginRight: 12}} source={images.google} />
                                <Image style={{marginRight: 12}} source={images.twitter} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            {renderImage()}
            {renderDots()}
            <StatusBar barStyle="dark-content" />
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
        marginRight: 10,
    },
    txtSignUp: {
        color: '#000'
    },
    line: {
        width: '64%',
        height: 1.5,
        backgroundColor: R.colors.gray4,
        marginRight: 16
    }
})