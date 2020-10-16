import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = ( state = { cartItems: [] }, action) => {
  switch(action.type){
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(i => i.id === item.id)

      if(existItem){
        return {
          ...state,
          cartItems: state.cartItems.map(i => i.id === existItem.id ? item : i)
        }
      }else{
        return{
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(i => i.id !== action.payload )}
    default:
      return state
  }
}