import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback, ScrollView, Dimensions } from "react-native"
import { connect } from "react-redux";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
import EvilIcons from 'react-native-vector-icons/EvilIcons' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
import { useNavigation } from "@react-navigation/native";

import R from '../../assets/R';
import { addCart, deleteCart, increaseQuantity, decreaseQuantity } from '../../actions/CartAction'
import Button from "../../components/Button";
import images from "../../assets/images";

const { width } = Dimensions.get('window')

function Cart (props) {
    const navigate = useNavigation()

    const carts = props.product.carts

    function getTotal() {
        let result = carts.reduce((acc, cart) => {
            return acc + cart.total
        }, 0)
        return result.toFixed(2)
    }


    const renderCarts = () => {
        return carts.map((cart, index) => (
            <View key={`${index}`} style={{flexDirection: 'row', position: 'relative', marginBottom: 32}}>
                <View style={{flex: 3}}>
                    <Image style={{width: '100%', height: 95, borderRadius: 20}}  source={cart.images}/>
                </View>
                <View style={{flex: 7, justifyContent: 'space-between', paddingLeft: 32}}>
                    <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>{cart.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 8}}>
                        <View style={{flexDirection: 'row'}}>
                            <SimpleLineIcons name="handbag" size={14} color={R.colors.txtGray} />
                            <Text style={{color: R.colors.txtGray, paddingLeft: 4}}>{cart.quantity}+</Text>
                        </View>
                        <Text style={{fontSize: 12, paddingHorizontal: 4, color: R.colors.txtGray}}>|</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                            <EvilIcons name="like" size={24} color={R.colors.txtGray} />
                            <Text style={{color: R.colors.txtGray}}>{cart.like}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingBottom: 12}}>
                        <Text style={{color: R.colors.main, fontWeight: '600', fontSize: 16}}>$</Text>
                        <Text style={{color: R.colors.main, fontWeight: '600', fontSize: 16}}>{cart.total}</Text>
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
                    {props.product.carts.map((item) => {
                    if (cart.id === item.id) {
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
                    <TouchableNativeFeedback onPress={() => props.increaseQuantity(cart.id)}>
                        <AntDesign name="pluscircle" size={24} color={R.colors.main} />
                    </TouchableNativeFeedback>
                    
                </View>
            </View>
        ))
    }

    // totalItem = cart.price x cart.count
    // total = totalItem + n totalItem
    return (
        <View style={{flex: 1, paddingTop: 38, backgroundColor: R.colors.white}}>
            <View style={{flex: 1,flexDirection: "row", alignItems: "center", paddingHorizontal: 24}}>
                <TouchableOpacity onPress={() => navigate.goBack()}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
               <Text style={{fontSize: 28, fontWeight: "500", paddingLeft: 32}}>Cart</Text>
            </View>
            <View style={{paddingHorizontal: 24, flex: 6}}>
                {carts.length > 0 ? (
                        <ScrollView >
                            {renderCarts()}
                        </ScrollView>
                    ) : (
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Image 
                            style={{width: width, height: 300}}
                            source={images.cartEmty}
                        />
                        <Button 
                            title="Go To Order" 
                            backgroundColor={R.colors.main} 
                            containerStyle={{height: 56, borderRadius: 20, marginHorizontal: 24, marginTop: 38, paddingHorizontal: 50}}
                            txtStyle={{color: R.colors.white}} 
                            onPress={() => navigate.goBack()}
                        />
                    </View>
                )}
                
            </View>
            <View style={{paddingHorizontal: 24, flex: 3}}>
                {carts.length > 0 && (
                    <>
                        <View style={{paddingHorizontal: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 64}}>
                            <Text style={{fontWeight: '500', fontSize: 18}}>Total</Text>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{fontWeight: 'bold', fontSize: 24, color: R.colors.main}}>$</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 24, color: R.colors.main}}>{getTotal()}</Text>
                            </View>
                            
                        </View>
        
                        <Button 
                            title="Checkout" 
                            backgroundColor={R.colors.main} 
                            containerStyle={{height: 56, borderRadius: 20, marginHorizontal: 24, marginTop: 38}}
                            txtStyle={{color: R.colors.white}} 
                            // onPress={handleSubmit(onSubmit)}
                        />
                    </>

                )}
            </View>
        </View>
    )
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
  })(Cart)