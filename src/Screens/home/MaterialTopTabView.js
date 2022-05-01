import React, {useState, useCallback} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
import EvilIcons from 'react-native-vector-icons/EvilIcons' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
import Feather from 'react-native-vector-icons/Feather' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import { Text, View, Image, ScrollView, Dimensions, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { addCart, deleteCart, increaseQuantity, decreaseQuantity } from '../../actions/CartAction'

import R from '../../assets/R';
import StarReview from '../../components/StarReview';
import { useNavigation } from "@react-navigation/native";
import { CARTSCREEN } from '../../routers/ScreenNames'
import constants from '../../Config/constants';


function MaterialTopTabView(props) {
    const navigate = useNavigation()
    const products = props.product.products
    const {data, type} = props


    const [selectedCountFood, setSelectedCountFood] = useState(null)
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"

    const getFoodItem = (item) => {
        setSelectedCountFood(item)
    }

  const toggleNumberOfLines = () => { //To toggle the show text or hide it
      setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e =>{
      setLengthMore(e.nativeEvent.lines.length >=3); //to check the text is more than 4 lines or not
      // console.log(e.nativeEvent);
  },[]);

    const renderOrder = () => {
       return data.order.map((product, id) => {
           return (
            <View key={`${id}`} style={{flexDirection: 'row', marginTop: 24, position: 'relative'}}>
                <View style={{flex: 3}}>
                    <Image style={{width: '100%', height: 95, borderRadius: 20}}  source={product.images}/>
                </View>
                <View style={{flex: 7, justifyContent: 'space-between', paddingLeft: 32}}>
                    <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>{product.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 8}}>
                        <View style={{flexDirection: 'row'}}>
                            <SimpleLineIcons name="handbag" size={14} color={R.colors.txtGray} />
                            <Text style={{color: R.colors.txtGray, paddingLeft: 4}}>{product.quantity}+</Text>
                        </View>
                        <Text style={{fontSize: 12, paddingHorizontal: 4, color: R.colors.txtGray}}>|</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                            <EvilIcons name="like" size={24} color={R.colors.txtGray} />
                            <Text style={{color: R.colors.txtGray}}>{product.like}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingBottom: 12}}>
                        <Text style={{color: R.colors.main, fontWeight: '600', fontSize: 16}}>$</Text>
                        <Text style={{color: R.colors.main, fontWeight: '600', fontSize: 16}}>{product.price}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', 
                    position: 'absolute', 
                    top: '38%', 
                    right: 12, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    {props.product.carts.map((cart) => {
                    if (product.idOrder === cart.id) {
                        return (
                            <View style={{flexDirection: 'row', alignItems: 'center'}} key={cart.id}>
                                {cart.count > 0 && (
                                    <>
                                        <TouchableNativeFeedback onPress={() => props.decreaseQuantity(cart.id)}>
                                            <View style={{width: 25, 
                                                height: 25, 
                                                borderRadius: 25, 
                                                backgroundColor: R.colors.gray5, 
                                                justifyContent: 'center', 
                                                alignItems: 'center'
                                            }}>
                                                <AntDesign name="minus" size={18} color={R.colors.black} />
                                            </View>
                                        </TouchableNativeFeedback>
                                            <Text style={{paddingHorizontal: 6}}>{cart.count}</Text>
                                    </>
                                )}
                            </View>
                        )
                    }
                    })}   
                    <TouchableNativeFeedback onPress={() => props.addCart(product)}>
                        <AntDesign name="pluscircle" size={24} color={R.colors.main} />
                    </TouchableNativeFeedback>
                    
                </View>
            </View>
            )
        }
            
        )
    }

    const renderReviews = () => {
        return data.reviewsDetail.map((review, id) => (
            <View key={`${id}`} style={{ paddingTop: 32}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 55, height: 55, borderRadius: 50}} source={review.avatar} />
                        <View style={{paddingLeft: 12}}>
                            <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 8}}>{review.username}</Text>
                            <StarReview rate={review.rating} />
                        </View>
                    </View>     
                    <View>
                        <Text style={{fontSize: 12, color: R.colors.colorNhap}}>{review.creatAt}</Text>
                    </View>
                </View>
                <View style={{paddingTop: 12}}>
                    <Text 
                        style={{lineHeight: 26}}
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 3}
                    >
                        {review.feedBack}
                    </Text>
                    {lengthMore ?  
                        <Text onPress={toggleNumberOfLines} style={{color: R.colors.main, fontWeight: 'bold'}}>{textShown ? 'Read less' : 'Read more'}</Text>
                        : null
                    }
                </View>
                <View style={{flexDirection: 'row', marginTop: 12}}>
                    {review.feedBackImg.map((image, index) => (
                        <View key={index} style={{marginRight: 12}}>
                            <Image key={index} style={{width: 60, height: 60, borderRadius: 10}} source={image} />
                        </View>
                    ))}
                </View>
            </View>
        ))
    }

    const renderInfo = () => {
        const infoData = data.info
        return (
            <View style={{marginTop: 32}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="phone" size={24} color={R.colors.txtGray} />
                        <Text style={{color: R.colors.txtGray, fontSize: 14, marginLeft: 8}}>Phone</Text>
                    </View>
                    <Text style={{fontSize: 16}}>+ {infoData.phone}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="email-outline" size={24} color={R.colors.txtGray} />
                        <Text style={{color: R.colors.txtGray, fontSize: 14, marginLeft: 8}}>Email</Text>
                    </View>
                    <Text style={{fontSize: 16}}>{infoData.email}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="bells" size={24} color={R.colors.txtGray} />
                        <Text style={{color: R.colors.txtGray, fontSize: 14, marginLeft: 8}}>Cuisine</Text>
                    </View>
                    <Text style={{fontSize: 16}}>{infoData.cuisine}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="wallet" size={24} color={R.colors.txtGray} />
                        <Text style={{color: R.colors.txtGray, fontSize: 14, marginLeft: 8}}>Average Cost</Text>
                    </View>
                    <Text style={{fontSize: 16}}>+ {infoData.averageCost}</Text>
                </View>
            </View>
        )
    }

  return (
    <View style={{
        backgroundColor: R.colors.white, 
        flex: 1, 
        paddingHorizontal: 24,
        position: 'relative'
    }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                {type === constants.ORDER && renderOrder()}
            </View>
            <View>
                {type === constants.REVIEWS && renderReviews()}
            </View>
            <View>
                {type === constants.INFOMATION && renderInfo()}
            </View>
        </ScrollView>

        {/* cart */}
        {props.product.carts?.length > 0 ? (
            <TouchableOpacity style={{
                width: 80, 
                height: 80, 
                backgroundColor: R.colors.main, 
                borderRadius: 50, 
                justifyContent: "center", 
                alignItems: "center",
                position: 'absolute',
                bottom: '10%',
                right: 20
            }}
                onPress={() => navigate.navigate(CARTSCREEN)}
            >
                <View style={{position: 'absolute'}}>
                    <SimpleLineIcons name="handbag" size={28} color={R.colors.white} style={{fontWeight: '600'}} />
                    <View style={{
                        width: 20, 
                        height: 20,
                        borderRadius: 50, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        backgroundColor: R.colors.white,
                        position: 'absolute',
                        right: -4,
                        top: 20
                    }}>
                        <Text style={{color: R.colors.main, fontWeight: 'bold'}}>{props.product.carts.length}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ) : null}
    </View>
  );
}


const mapStateToProps = (state) => {
    return {
      product: state.CartReducer,
    };
  };
  
  export default connect(mapStateToProps, {
    addCart,
    deleteCart,
    increaseQuantity,
    decreaseQuantity,
  })(MaterialTopTabView)