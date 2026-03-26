import OrdersEmptyState from '../../../features/orders/components/OrdersEmptyState/OrdersEmptyState.jsx'
import { getOrders } from '@/entities/order/api/get-orders.js'
import { useEffect, useState } from 'react'
import { OrdersHistory } from '@/features/orders/components/OrdersHistory/OrdersHistory.jsx'
import Loader from '@/components/Loader/Loader.jsx'

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadOrders = async () => {
      try {
        setIsLoading(true)

        const data = await getOrders()
        setOrders(data)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }

    loadOrders()
  }, [])

  if (orders.length) {
    return <OrdersHistory orders={orders} />
  }

  return <OrdersEmptyState />
}

export default OrderHistoryPage
