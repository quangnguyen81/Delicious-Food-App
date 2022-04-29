import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Searchbar } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"

import R from "../../assets/R";
import { getFontXD, getWidth, WIDTHXD, WIDTHXDICON } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import images from "../../assets/images";
import { 
  categoryData, 
  restaurantsData, 
  breakfastData
} from '../../apis/fakeData'

const { width, height } = Dimensions.get('window')

const MyListView = (props) => {

  const number = props


  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onChangeSearch = query => setSearchQuery(query);

  const onSelectCategory = (category) => {
    // let restaurantsList = 
    setSelectedCategory(category)
  }

  const renderCategories = () => {
    const renderItem = ({item}) => {
      
      return (
        <View style={{}}>
          <TouchableOpacity 
            style={{
              padding: 16,
              backgroundColor: (selectedCategory?.id === item.id ? R.colors.main : R.colors.gray6),
              borderRadius: 25,
              marginRight: 32,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => onSelectCategory(item)}
          >
            <Image style={{width: 45, height: 45, tintColor: (selectedCategory?.id === item.id ? R.colors.white : R.colors.black)}} source={item.icon} /> 
          </TouchableOpacity>
          <Text style={{textAlign: "center", paddingRight: 32, paddingTop: 8}}>{item.name}</Text>

        </View>

      )
    }
    return (
      <FlatList 
        data={categoryData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{marginVertical: 32}}
      />
    )
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: R.colors.white,
      }}
    >
      <View style={{marginTop: 64, paddingHorizontal: 24,}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            backgroundColor: R.colors.gray6,
            shadowColor: 'transparent',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
            fontSize: 16
          }}
        />
      <View style={{}}>
        {renderCategories()}
      </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
});

export default MyListView;
