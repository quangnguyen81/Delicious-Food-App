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

import R from "../../assets/R";
import { restaurantsData } from '../../apis/fakeData'
import Restaurant from "./Restaurant";

import {
    FOODRESTAURANT
} from '../../routers/ScreenNames'

function NearMe (props) {
    const navigate = useNavigation()

    const renderNearme = () => {
        const renderItem = ({item}) => {
          return (
            
              <Restaurant 
                image={item.images}
                name={item.name}
                duration={item.duration}
                distance={item.distance}
                location={item.location}
                rating={item.rating}
                item={item}
              />



           
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