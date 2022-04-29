import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyListView from './MyListView';

import { connect } from "react-redux";
import { add, sub } from "../../actions/numberAction"
const MyList = (props) => {
  console.log(props)

 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MyListView data={props.number}  />
      <View style={{paddingHorizontal: 100}}>
        <TouchableOpacity onPress={() => {props.sub(1)}}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 20}}>{props.count}</Text>
        <TouchableOpacity onPress={() => props.add(2)}>
          <Text>+</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};


const mapStateToProps = (state) => {
  return {
    count: state.NumberReducer,
  };
};

export default connect(mapStateToProps, {
  add,
  sub,
})(MyList);
