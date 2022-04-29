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
import ModalLocation from "./ModalLocation";
import images from "../../assets/images";
import NearMe from "./NearMe";
import { categoryData, restaurantsData, breakfastData} from '../../apis/fakeData'

const { width, height } = Dimensions.get('window')

const HomeView = (props) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const [categories, setCategories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = useState(null);


  const onChangeSearch = query => setSearchQuery(query);

  const onSelectCategory = (category) => {
    // let restaurantsList = 
    setSelectedCategory(category)
  }

  const getID = (item) => {
    console.log(item);
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

  const renderMenu = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity style={{
          width: 120,
          height: 120,
          backgroundColor: (item.bgc),
          borderRadius: 25,
          marginRight: 32,
          marginBottom: 32,
          position: "relative",
          overflow: "hidden"
        }}
          onPress={() => getID(item)}
        >

          <Text style={{fontSize: 14, paddingTop: 16, paddingLeft: 12, fontWeight: '500'}}>{item.name}</Text>
          <View style={{position: "absolute", bottom: -10, left: 0}}>
            <Image style={{width: 180, height: 80, borderRadius: 20}} source={item.images} />

          </View>
        </TouchableOpacity>
      )
    } 
    
    return (
        <View>
          <Text style={{fontSize: 28, fontWeight: "bold"}}>{selectedCategory?.name} Menu</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <FlatList
              data={selectedCategory?.menu}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={{marginVertical: 24}}
              numColumns={3}
              scrollEnabled={false}
              pagingEnabled
            />

        </ScrollView>
        </View>


    )
  }

  const renderBreakFast = () => {
    let widthImg = 85
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{flexWrap:'wrap', width: widthImg * 5.4}}
      >
        {breakfastData.map((item) => (

          <View style={{marginRight: 24, marginBottom: 24, alignItems: "center"}} key={item.id}>
            <View>
              <Image 
                source={item.images} 
                style={{width: widthImg, height: widthImg, borderRadius: 20}}
              />
            </View>
            <Text style={{paddingTop: 12}}>{item.name}</Text>
          </View>
        ))}

        {/* </View> */}
      </ScrollView>
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
      </View>
      <View style={{flexDirection: "row", alignItems: "center", marginTop: 16, paddingHorizontal: 24,}}>
        <Entypo name="location" size={24} color="black" />
        <Text style={{marginLeft: 12}}>9 West 46th Street, New York City</Text>
      </View>
      <View style={{paddingHorizontal: 24,}}>
        {renderCategories()}
      </View>
      <View style={{paddingHorizontal: 24,}}>
        {renderMenu()}
      </View>
      <View style={{paddingHorizontal: 24,}}>

        <NearMe />
      </View>
      <View style={{marginBottom: 24}}>
        <Image 
          source={images.saleOff}
          resizeMode="contain"
          style={{width: width, height: 180}}
        />
      </View>
      <View style={{paddingHorizontal: 24}}>
        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24
        }}
        >
          <Text style={{fontSize: 28, fontWeight: "500"}}>For Breakfast</Text>
          <Text style={{fontSize: 16, marginTop: 8}}>See all</Text>
        </View>
        {renderBreakFast()}
      </View>
    <ModalLocation />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeView;
