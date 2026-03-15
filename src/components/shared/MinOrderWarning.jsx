import React from 'react'
import { useCart } from '../../hooks/useCart.js'
import { MIN_ORDER_PRICE } from '../../constants/status.js'

const MinOrderWarning = () => {
  const { total, items } = useCart()

  const isMinOrderReached = total >= MIN_ORDER_PRICE
  const isCartEmpty = items.length === 0

  if (isCartEmpty || isMinOrderReached) return null

  return <div style={{ color: 'orange' }}>Минимальная сумма заказа {MIN_ORDER_PRICE} грн</div>
}

export default MinOrderWarning
