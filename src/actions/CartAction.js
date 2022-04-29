import {
    ADDCART,
    DELETECART,
    INCREASEQUANTITY,
    DECREASEQUANTITY,
  } from './actionTypes';
  
  export const addCart = (payload) => {
    return {
      type: ADDCART,
      payload
    };
  };
  
  export const deleteCart = (payload) => {
    return {
      type: DELETECART,
      payload 
    };
  };

  export const increaseQuantity = (payload) => {
    return {
      type: INCREASEQUANTITY,
      payload 
    };
  };
  
  export const decreaseQuantity = (payload) => {
    return {
      type: DECREASEQUANTITY,
      payload 
    };
  };
  