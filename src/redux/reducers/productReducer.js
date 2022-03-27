import {types} from '../constants/types'
// import types from '../constants'
const initialState={
    products:[],
    addedItems:[],
    total:0
}

export const productReducer =(state=initialState,{type, payload})=>{
    switch (type) {
        case types.SET_PRODUCTS:
            return {...state, products:payload };
    
        default:
            return state;
    }

}
export const cartReducer = (state= initialState,action) => {
 return state;
}
