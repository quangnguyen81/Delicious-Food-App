import React, {useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground,  Dimensions, StatusBar, ScrollView, TouchableNativeFeedback} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import R from "../../assets/R";
import StarReview from "../../components/StarReview";
import MaterialTopTab from "./MaterialTopTab";
import { toggleLike } from '../../actions/FavoriteAction'

const { width, height } = Dimensions.get('window')
function FoodRestaurant (props) {
    const [vote, setVote] = useState(false)

    const navigate = useNavigation()
    const restaurantsData = props.route.params

    const favotiteStore = props.product.favotiteStore
    console.log(favotiteStore[restaurantsData.item.id]?.favorite);
    return (        
        <View style={{flex: 1, backgroundColor: R.colors.white}}>
            <StatusBar barStyle="light-content" />
            <LinearGradient style={{ flex: 1, position: "absolute", top: 0, width: width, zIndex: 999}} colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.0)']}>
                <View style={{
                    paddingTop: 50, 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    paddingHorizontal: 24
                }}>
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <AntDesign name="left" size={32} color="white" />
                    </TouchableOpacity>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Ionicons style={{paddingHorizontal: 4}} name="search-outline" size={32} color="white" />
                        </TouchableOpacity>
                        <TouchableNativeFeedback onPress={() => props.toggleLike(restaurantsData.item)}>
                            <Ionicons style={{paddingHorizontal: 4}} name="heart" size={32} color={favotiteStore[restaurantsData.item.id]?.favorite ? R.colors.red : R.colors.white} />
                        </TouchableNativeFeedback>
                        <TouchableOpacity>
                            <Ionicons style={{paddingHorizontal: 4}} name="share-social-outline" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            <ImageBackground
                source={restaurantsData.item.images}
                style={{width: width, flex:0.5}}
                resizeMode="cover"
            />
            <ScrollView contentContainerStyle={{flex: 1}}>
                <View style={{paddingTop: 32, paddingHorizontal: 24, backgroundColor: R.colors.white}}>
                    <View>
                        <Text style={{fontSize: 26, fontWeight: '500'}}>{restaurantsData.item.name}</Text>
                        <View style={{paddingVertical: 16}}>
                            <View style={{flexDirection: "row", marginBottom: 12, alignItems: "center"}}>
                                {/* icon */}
                                <Entypo name="location" size={18} color={R.colors.gray1} />
                                <Text style={{color: R.colors.txtGray, marginLeft: 8}}>{restaurantsData.item.location}</Text>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center",  marginBottom: 12}}>
                                {/* icon */}
                                <AntDesign name="clockcircleo" size={18} color={R.colors.gray1} />
                                <Text style={{color: R.colors.txtGray, marginLeft: 8}}>Open {restaurantsData.item.open}</Text>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <StarReview rate={restaurantsData.item.rating} numberStar />
                                <Text style={{marginHorizontal: 4, color: R.colors.txtGray}}> - </Text>
                                <Text style={{color: R.colors.txtGray, fontSize: 14}}>{restaurantsData.item.reviews} Reviews</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <MaterialTopTab data={restaurantsData} />
                
            {/* tab */}
                
            </ScrollView>
        </View>

    )
}

const mapStateToProps = (state) => {
    return {
      product: state.FavoriteReducer,
    };
  };
  
  export default connect(mapStateToProps, {
    toggleLike,
    
  })(FoodRestaurant)