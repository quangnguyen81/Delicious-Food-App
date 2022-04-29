import userReducer from './userReducer';
import {combineReducers} from 'redux';
import ModalLoadingReducer from './ModalLoading';
import SnackReducer from './SnackReducer';
import ScreenInitReducer from './ScreenInit';
import languageReducer from './languageReducer';
import NumberReducer from './NumberReducer';
import CartReducer from './CartReducer';
// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  ModalLoadingReducer,
  SnackReducer,
  ScreenInitReducer,
  languageReducer,
  NumberReducer,
  CartReducer
});

export default rootReducer;
