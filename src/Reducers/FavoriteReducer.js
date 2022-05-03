import { TOGGLELIKE } from '../actions/actionTypes';

const initialState = {
    favotiteStore: [],
};
// @ts-ignore


export default function FavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLELIKE: {
        const productInStore = state.favotiteStore.find(
            item => item.id === action.payload.id
        )
        if (!productInStore) {
            let newList = {
                ...action.payload,
                favorite: true
            }
            return {
                favotiteStore: [...state.favotiteStore, newList]
            }
        } else {
            let newStore = state.favotiteStore
            const objIndex = newStore.findIndex(
                obj => obj.id == action.payload.id
            )

            if (newStore[objIndex].favorite) {
                newStore[objIndex].favorite = false
                
            } 
            else {
                newStore[objIndex].favorite = true
            }
            
            return {
                favotiteStore: [...newStore]
            }
        }
    }
    
    default:
      return state;
  }
}
