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
import { restaurantsData} from '../../apis/fakeData'
import { addCart, deleteCart, increaseQuantity, decreaseQuantity } from '../../actions/CartAction'

import {
    FOODRESTAURANT
} from '../../routers/ScreenNames'

function NearMe (props) {
    const navigate = useNavigation()

    const renderNearme = () => {
        const renderItem = ({item}) => {
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
                  source={item.images}
                />
              </View>
              <View style={{flex: 0.67, justifyContent: "space-between", marginLeft: 24}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                <View>
                  <View style={{flexDirection: "row"}}>
                    {/* icon */}
                    <Entypo name="location" size={18} color={R.colors.gray1} />
                    <Text style={{color: R.colors.txtGray, marginLeft: 6}}>{item.location}</Text>
                  </View>
                  <View style={{flexDirection: "row", alignItems: "center", marginTop: 8}}>
                    {/* icon */}
                    <AntDesign name="clockcircleo" size={18} color={R.colors.gray1} />
                    <Text style={{color: R.colors.txtGray, marginLeft: 6}}>{item.duration}</Text>
                    <View style={{
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        backgroundColor: R.colors.gray3,
                        marginHorizontal: 6}}/>
                    <Text style={{color: R.colors.txtGray}}>{item.distance}</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <View style={{flexDirection: "row"}}>
                    <StarReview rate={item.rating} />
                  </View>
                  <Text>({item.rating})</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
        return (
            <FlatList 
              data={restaurantsData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={{marginTop: 24}}
            />
            
    
        )
      }

    return (
        <View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{fontSize: 28, fontWeight: "500"}}>Near me</Text>
            <Text style={{fontSize: 16, marginTop: 8}}>See all</Text>
            </View>
            {renderNearme()}

        </View>
    )
}

export default NearMe