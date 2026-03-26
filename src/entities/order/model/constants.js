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

export const DELIVERY_TYPE = {
  DELIVERY: 'delivery',
  PICKUP: 'pickup',
}

export const DELIVERY_TYPE_LABELS = {
  [DELIVERY_TYPE.DELIVERY]: 'Доставка',
  [DELIVERY_TYPE.PICKUP]: 'Самовывоз',
}

export const PAYMENT_METHOD = {
  CASH: 'cash',
  CARD: 'card',
}

export const PAYMENT_METHOD_LABELS = {
  [PAYMENT_METHOD.CASH]: 'Наличными',
  [PAYMENT_METHOD.CARD]: 'Картой',
}

export const ORDER_STATUS_TRANSITIONS = {
  [ORDER_STATUS.NEW]: [ORDER_STATUS.CONFIRMED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.CONFIRMED]: [ORDER_STATUS.COOKING, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.COOKING]: [ORDER_STATUS.READY, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.READY]: [ORDER_STATUS.COMPLETED],
  [ORDER_STATUS.COMPLETED]: [],
  [ORDER_STATUS.CANCELLED]: [],
}

// const allowed = ORDER_STATUS_TRANSITIONS[order.status]
//
// {allowed.includes(ORDER_STATUS.CONFIRMED) && (
//   <button onClick={() => changeStatus(ORDER_STATUS.CONFIRMED)}>
//     Подтвердить
//   </button>
// )}

// export const canChangeStatus = (from, to) => ORDER_STATUS_TRANSITIONS[from]?.includes(to)
//
// if (!canChangeStatus(order.status, newStatus)) {
//   throw new Error('Недопустимый переход статуса')
// }
