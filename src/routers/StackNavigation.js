import React, { Fragment, useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";

import Intro from "../Screens/Intro"
import SignIn from "../Screens/Login/SignIn";
import SignUp from "../Screens/Login/SignUp";
import Forgot from "../Screens/Login/Forgot";
import Otp from "../Screens/Login/Otp";
import NewPassword from "../Screens/Login/NewPassword";


import * as ScreenName from "./ScreenNames";

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={"none"}
      initialRouteName={ScreenName.INTROSCREEN}
    >
      <Stack.Screen name={ScreenName.INTROSCREEN} component={Intro} />
      <Stack.Screen name={ScreenName.SIGNINSCREEN} component={SignIn} />
      <Stack.Screen name={ScreenName.SIGNUPSCREEN} component={SignUp} />
      <Stack.Screen name={ScreenName.FORGOTSCREEN} component={Forgot} />
      <Stack.Screen name={ScreenName.OTPSCREEN} component={Otp} />
      <Stack.Screen name={ScreenName.NEWPASSWORDSCREEN} component={NewPassword} />
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );

}