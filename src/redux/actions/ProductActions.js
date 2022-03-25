import {types} from '../constants/types'

export const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  payload: products,
})

export const selectedProduct = (product) => ({
  type: types.SELECTED_PRODUCT,
  payload: product,
})

// export const removeSelelctedProduct = (payload) => ({
//   type: REMOVE_SELECTED_PRODUCT,
//   payload
// })


