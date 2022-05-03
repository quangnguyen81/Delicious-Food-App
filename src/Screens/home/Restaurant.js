import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import StarReview from '../../components/StarReview'
import R from "../../assets/R";

import {
    FOODRESTAURANT
} from '../../routers/ScreenNames'

function Restaurant (props) {
    const navigate = useNavigation()
    const {
        image,
        duration,
        distance,
        name,
        location,
        rating,
        item
    } = props

    return (
        <TouchableOpacity 
        style={{flex: 1, flexDirection: "row", marginBottom: 32}}
        onPress={() => navigate.navigate(FOODRESTAURANT, {item})}
      >
            <View style={{flex: 0.33}}>
            <Image 
                style={{
                width: '100%',
                height: 120,
                borderRadius: 20
                }}
                source={image}
            />
            </View>
            <View style={{flex: 0.67, justifyContent: "space-between", marginLeft: 24}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{name}</Text>
            <View>
                <View style={{flexDirection: "row"}}>
                {/* icon */}
                <Entypo name="location" size={18} color={R.colors.gray1} />
                <Text style={{color: R.colors.txtGray, marginLeft: 6}}>{location}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginTop: 8}}>
                {/* icon */}
                <AntDesign name="clockcircleo" size={18} color={R.colors.gray1} />
                <Text style={{color: R.colors.txtGray, marginLeft: 6}}>{duration}</Text>
                <View style={{
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    backgroundColor: R.colors.gray3,
                    marginHorizontal: 6}}/>
                <Text style={{color: R.colors.txtGray}}>{distance}</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{flexDirection: "row"}}>
                <StarReview  rate={rating}/>
                </View>
                <Text>({rating})</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default Restaurant