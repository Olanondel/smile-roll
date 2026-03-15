import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../features/cart/cartSelectors.js'
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../store/slices/cartSlice.js'
import { createCartItem } from '../utils/createCartItem.js'
import { MIN_ORDER_PRICE } from '../constants/status.js'

export const useCart = () => {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  const isMinOrderReached = total >= MIN_ORDER_PRICE

  const add = (product) => dispatch(addToCart(createCartItem(product)))
  const remove = (productId) => dispatch(removeFromCart(productId))
  const increase = (productId) => dispatch(increaseQuantity(productId))
  const decrease = (productId) => dispatch(decreaseQuantity(productId))
  const clear = () => dispatch(clearCart())

  return { items, total, add, remove, increase, decrease, clear, isMinOrderReached }
}
