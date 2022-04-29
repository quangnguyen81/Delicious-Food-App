import {ADD, SUB} from '../actions/actionTypes';

const initialState = 100
// @ts-ignore

export default function NumberReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      return state + action.payload
    }
    case SUB: {
      return state - action.payload
    }
    default:
      return state;
  }
}
