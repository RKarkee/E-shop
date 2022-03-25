import {SET_PRODUCTS, SELECTED_PRODUCTS,REMOVE_SELECTED_PRODUCT} from '../constants/types'

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload:products,
})

export const selectedProduct = (product) => ({
  type: SELECTED_PRODUCTS,
  payload: product,
})

// export const removeSelelctedProduct = (payload) => ({
//   type: REMOVE_SELECTED_PRODUCT,
//   payload
// })


