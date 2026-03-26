export const ORDER_STATUS = {
  NEW: 'new',
  CONFIRMED: 'confirmed',
  COOKING: 'cooking',
  READY: 'ready',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
}

export const ORDER_STATUS_META = {
  [ORDER_STATUS.NEW]: {
    label: 'Новый',
    color: '#FF9800',
  },
  [ORDER_STATUS.CONFIRMED]: {
    label: 'Подтвержден',
    color: '#2196F3',
  },
  [ORDER_STATUS.COOKING]: {
    label: 'Готовится',
    color: '#9C27B0',
  },
  [ORDER_STATUS.READY]: {
    label: 'Готов',
    color: '#4CAF50',
  },
  [ORDER_STATUS.COMPLETED]: {
    label: 'Завершен',
    color: '#607D8B',
  },
  [ORDER_STATUS.CANCELLED]: {
    label: 'Отменен',
    color: '#F44336',
  },
}
