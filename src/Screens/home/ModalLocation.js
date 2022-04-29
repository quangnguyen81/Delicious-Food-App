import React, { useState } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import Modal from "react-native-modal";

import R from "../../assets/R";
import Button from "../../components/Button";
import images from "../../assets/images";

export default () => {
  const [isModalVisible, setModalVisible] = useState(true);

    return (
        <View>
            <Modal isVisible={isModalVisible} deviceHeight={820} backdropColor={R.colors.white} backdropOpacity={1}>
                <View>
                    <View style={{marginTop: 38, marginBottom: 32}}>
                    <Image
                        source={images.home1}
                        resizeMode="cover"
                        style={{
                        width: 360,
                        height: 200,
                        borderRadius: 20
                        }}
                    />
                    </View>
                    <Text 
                    style={{
                        textAlign: "center", 
                        paddingHorizontal: 38, 
                        lineHeight: 24,
                        marginBottom: 30,
                        fontSize: 16
                    }}
                    >Set your location to start exploring restaurants around you</Text>
                    <Button 
                    title="Enable location" 
                    backgroundColor={R.colors.main} 
                    txtStyle={{color: R.colors.white}}
                    containerStyle={{height: 56, borderRadius: 20}} 
                    onPress={() => setModalVisible(!isModalVisible)}
                    />
                    <Button 
                            title="No, I do it later" 
                            backgroundColor={R.colors.gray5} 
                            containerStyle={{height: 56, borderRadius: 20}} 
                            onPress={() => setModalVisible(!isModalVisible)}
                    />
                </View>
            </Modal>
        </View>
)}

