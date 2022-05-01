import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, ScrollView } from 'react-native';

import R from '../../assets/R';
import MaterialTopTabView from './MaterialTopTabView';
import constants from '../../Config/constants';
import { connect } from "react-redux";
import { addCart, deleteCart, increaseQuantity, decreaseQuantity } from '../../actions/CartAction'


const Tab = createMaterialTopTabNavigator();

function MaterialTopTab(props) {
  const restaurantDetailData = props.data.item
  return (
    <Tab.Navigator
        swipeEnabled
        tabBarOptions={{
            inactiveTintColor: R.colors.gray1,
            activeTintColor: R.colors.main,
            pressOpacity: 1,
            labelStyle: {
            fontSize: 18,
            textTransform: 'none',
            fontWeight: 'bold',
        },
        
        labelStyle: { fontSize: 16,fontWeight:"600", textTransform: "none" },
         style: {
            width: '90%',
            fontSize: 18
            // borderBottomColor: 'red',
            // borderBottomWidth: 0,  
        },
        indicatorStyle: {
            backgroundColor: R.colors.main,
            height: 6,
            bottom: 0,
            borderRadius:10,
            width:6,
            left:"16%",
        },
        tabStyle: {
        }
            
        }}
        
    >
      <Tab.Screen 
            name="Order" 
            children={() => <MaterialTopTabView data={restaurantDetailData} type={constants.ORDER}/>}
        />
      <Tab.Screen 
            name="Reviews" 
            children={() => <MaterialTopTabView data={restaurantDetailData} type={constants.REVIEWS}/>}
        />
      <Tab.Screen 
            name="Information" 
            children={() => <MaterialTopTabView data={restaurantDetailData} type={constants.INFOMATION}/>}
        />
    </Tab.Navigator>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     product: state.CartReducer,
//   };
// };

export default MaterialTopTab
