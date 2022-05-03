import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyListView from './MyListView';

import { connect } from "react-redux";
import { toggleLike } from "../../actions/FavoriteAction"
const MyList = (props) => {

  const favoriteStore = props.product.favotiteStore
 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MyListView listFavorite={favoriteStore} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.FavoriteReducer,
  };
};

export default connect(mapStateToProps, {
  toggleLike,
  
})(MyList)
