import {types} from '../constants/types'
// import types from '../constants'
const initialState={
    products:[{
        id:1,
        title:"Dell",
        category: "Pcs"
    }]
}

export const productReducer =(state=initialState,{type, payload})=>{
    switch (type) {
        case types.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }

}