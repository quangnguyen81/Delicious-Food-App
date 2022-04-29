import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"


import Home from "../Screens/home/Home";
import History from "../Screens/history/History";
import Notification from "../Screens/notification/Notification";
import MyList from "../Screens/MyList/MyList";
import Profile from "../Screens/Profile/Profile"

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{ activeTintColor: R.colors.main }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={History}
          options={{
            tabBarLabel: "Order",
            tabBarIcon: ({ color, size }) => (
              <Material name="text-box-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MylistScreen"
          component={MyList}
          options={{
            tabBarLabel: "My List",
            tabBarIcon: ({ color, size }) => (
              <Feather name="bookmark" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
