import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native";

import InputForm from '../../components/Input/InputForm'
import Button from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import R from "../../assets/R";
import { OTPSCREEN } from '../../routers/ScreenNames'

export default (props) => {

    const navigate = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
    navigate.navigate(OTPSCREEN);
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
                <Text style={{fontSize: 32, fontWeight: "bold"}}>Forgot </Text>
                <Text style={{fontSize: 32, fontWeight: "bold", marginTop: 8}}>Password</Text>
                <Text style={{color: R.colors.gray1, marginVertical: 18}}>Enter your phone</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputForm
                            textColor={R.colors.white}
                            // placeHolderColor={"#80E0FF"}
                            placeholder={"Phone number"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.phoneNumber}
                            renderIcon={() => (
                                <Feather name="phone" size={24} color={R.colors.gray} />
                            )}
                            keyboardType="default"
                        />
                    )}
                    name="phoneNumber"
                    defaultValue=""
                />

                <Button 
                    title="Next" 
                    backgroundColor={R.colors.main} 
                    containerStyle={{height: 56, borderRadius: 20}} 
                    onPress={handleSubmit(onSubmit)}
                />
            </View>            
        </View>
    )
}