import { act } from 'react-test-renderer';
import {
  ADDCART, 
  DELETECART, 
  INCREASEQUANTITY, 
  DECREASEQUANTITY
} from '../actions/actionTypes';

const initialState = {
  numberCart: 0,
  carts: [],
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
          like: action.payload.like,
          total: action.payload.price
        }

        state.carts.push(cart)
      } else {
        let check = false
        state.carts.map((item, key) => {
          if(item.id === action.payload.idOrder) {
            state.carts[key].count++
            // state.carts[key].total * state.carts[key].count++
            // item.total * item.count
            
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
              like: action.payload.like,
              total: action.payload.price
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
        // state.carts[action.payload - 1].count++
        let newList = state.carts.map(cart => {
          if (cart.id == action.payload)
            return {...cart,count: cart.count + 1, total: Number(cart.price * (cart.count + 1))}
            else
              return {...cart}
        })

      return {
        ...state,
        carts: newList
      }
    }

    case DECREASEQUANTITY: {
      // tru count trong carts
      const newList = state.carts.map(cart => {
        if(cart.id == action.payload){
          return {...cart,count: cart.count - 1, total: Number(cart.price * (cart.count - 1))}
        } else {
          return {...cart}
        }
      }
      )
      const data = newList.filter(cart => cart.count > 0)

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
