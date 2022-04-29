import { act } from 'react-test-renderer';
import {
  ADDCART, 
  DELETECART, 
  INCREASEQUANTITY, 
  DECREASEQUANTITY
} from '../actions/actionTypes';

import { restaurantsData } from '../apis/fakeData'

const orderState = restaurantsData[0].order

const initialState = {
  numberCart: 0,
  carts: [],
  products: orderState
}
// @ts-ignore


export default function CartReducer(state = initialState, action) {

  switch (action.type) {
    case ADDCART: {
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.idOrder,
          count: 1,
          name: action.payload.name,
          images: action.payload.images,
          price: action.payload.price,
          quantity: action.payload.quantity,
          like: action.payload.like
        }

        state.carts.push(cart)
      } else {
        let check = false
        state.carts.map((item, key) => {
          if(item.id === action.payload.idOrder) {
            state.carts[key].count++
            check = true
          }
        })
        if(!check){
          let _cart = {
              id:action.payload.idOrder,
              count:1,
              name:action.payload.name,
              images:action.payload.images,
              price:action.payload.price,
              quantity: action.payload.quantity,
              like: action.payload.like
          }
          state.carts.push(_cart);
      }}

      return {
        ...state,
        numberCart: state.numberCart + 1
      }
    }

    case INCREASEQUANTITY: {
        state.numberCart++
        state.carts[action.payload - 1].count++
        
      return {
        ...state,
      }
    }

    case DECREASEQUANTITY: {
      // tru count trong carts
      const newList=state.carts.map(e=>{
        if(e.id==action.payload){
            return {...e,count: e.count-1}
        } else {
          return {...e}
        }
      }
      )
      const data=newList.filter(e=>e.count>0)

      console.log("newList: ",data)
      console.log("payload: ",action.payload)
      // console.log("currList: ",state.carts)
      return {
        ...state,
        carts: data
      }


    }
    default:
      return state;
  }
}
