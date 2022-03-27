import { combineReducers } from 'redux';
import { cartReducer, productReducer } from './productReducer';

const reducers = combineReducers({
    allproducts:productReducer,
    cart:cartReducer,
});

export default reducers;