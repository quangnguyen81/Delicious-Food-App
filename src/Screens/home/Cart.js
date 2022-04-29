import React from "react";
import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"
import { connect } from "react-redux";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
import EvilIcons from 'react-native-vector-icons/EvilIcons' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
import { useNavigation } from "@react-navigation/native";

import R from '../../assets/R';
import { addCart, deleteCart, increaseQuantity, decreaseQuantity } from '../../actions/CartAction'
import Button from "../../components/Button";

function Cart (props) {
    const carts = props.product.carts

    const navigate = useNavigation()

    const renderCarts = () => {
        return carts?.map((cart, index) => (
            <View key={`${index}`} style={{flexDirection: 'row', marginTop: 24, position: 'relative'}}>
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
                        <Text style={{color: R.colors.main, fontWeight: '600', fontSize: 16}}>{cart.price}</Text>
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
                            <>
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
                            </>
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

    return (
        <View style={{flex: 1, paddingTop: 64, backgroundColor: R.colors.white}}>
            <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 24}}>
                <TouchableOpacity onPress={() => navigate.goBack()}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
               <Text style={{fontSize: 28, fontWeight: "500", paddingLeft: 32}}>Cart</Text>
            </View>
            <View style={{paddingHorizontal: 24}}>
                {renderCarts()}
            </View>
            <View style={{paddingHorizontal: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 64}}>
                <Text style={{fontWeight: '500', fontSize: 18}}>Total</Text>
                <Text style={{fontWeight: 'bold', fontSize: 24, color: R.colors.main}}>$ 88.88</Text>
            </View>

            <Button 
                title="Checkout" 
                backgroundColor={R.colors.main} 
                containerStyle={{height: 56, borderRadius: 20, marginHorizontal: 24, marginTop: 38}}
                txtStyle={{color: R.colors.white}} 
                // onPress={handleSubmit(onSubmit)}
            />
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