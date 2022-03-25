import {types} from '../constants/types'
// import types from '../constants'
const initialState={
    products:[],
}

export const productReducer =(state=initialState,{type, payload})=>{
    switch (type) {
        case types.SET_PRODUCTS:
            return {...state, products:payload };
    
        default:
            return state;
    }

}