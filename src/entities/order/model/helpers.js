import { ORDER_STATUS_META } from './constants'

export const getOrderStatusMeta = (status) =>
  ORDER_STATUS_META[status] || {
    label: 'Неизвестно',
    color: '#999999',
  }

export const getOrderStatusLabel = (status) => getOrderStatusMeta(status).label

export const getOrderStatusColor = (status) => getOrderStatusMeta(status).color

export const formatOrderDate = (value) => {
  if (!value) return ''

  const date =
    typeof value?.toDate === 'function'
      ? value.toDate()
      : value instanceof Date
        ? value
        : new Date(value)

  if (Number.isNaN(date.getTime())) return ''

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export const getOrderItemsCount = (items = []) =>
  items.reduce((total, item) => total + (item.quantity || 0), 0)

export const getOrderTotal = (items = []) =>
  items.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0)
