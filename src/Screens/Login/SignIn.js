import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import InputForm from '../../components/Input/InputForm'
import Button from "../../components/Button";
import { FORGOTSCREEN } from '../../routers/ScreenNames'
import R from "../../assets/R";
import images from "../../assets/images";
import { TABNAVIGATOR } from "../../routers/ScreenNames"

export default (props) => {

    const navigate = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
    navigate.navigate(TABNAVIGATOR);
    console.log(data);
    };

    return (
        <View style={{flex: 1, backgroundColor: R.colors.white }}>
            <TouchableOpacity 
                style={{width: '22%', paddingHorizontal: 32, marginTop: 80}}
                onPress={() => navigate.goBack()}
            >
                <Entypo name="chevron-thin-left" size={24} color="black" />
            </TouchableOpacity>
            <View style={{flex: 0.22}} />
            <View style={{flex: 0.5, paddingHorizontal: 32}}>
                <Text style={{fontSize: 32, fontWeight: "bold", marginBottom: 48}}>Sign In</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputForm
                            textColor={R.colors.white}
                            // placeHolderColor={"#80E0FF"}
                            placeholder={"Username"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.username}
                            renderIcon={() => (
                                <Feather name="user" size={24} color={R.colors.gray} />
                            )}
                        />
                    )}
                    name="username"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputForm
                            textColor={R.colors.white}
                            // placeHolderColor={"#80E0FF"}
                            placeholder={"Password"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            isPassword={true}
                            error={errors.password}
                            renderIcon={() => (
                                <Feather name="lock" size={24} color={R.colors.gray} />
                            )}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                <Button 
                    title="Sign In" 
                    backgroundColor={R.colors.main} 
                    containerStyle={{height: 56, borderRadius: 20}} 
                    onPress={handleSubmit(onSubmit)}
                />
                <TouchableOpacity onPress={() => {navigate.navigate(FORGOTSCREEN)}}>
                    <Text style={{textAlign: "right", color: R.colors.gray}} >Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.28, marginTop: 160}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{
                        width: '64%',
                        height: 1.5,
                        backgroundColor: R.colors.gray4,
                        marginRight: 16
                    }}>    
                    </View>
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
    )
}