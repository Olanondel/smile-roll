import { ORDER_STATUS } from './constants'

export const mapOrderToDto = ({ form, items, total }) => {
  return {
    customer: {
      firstName: form.firstName.trim(),
      phone: form.phone.trim(),
    },

    delivery: {
      type: form.deliveryType,
      addressId: form.addressId ?? null,
      day: form.deliveryDay,
      time: form.deliveryTime,
      doNotCall: Boolean(form.doNotCall),
      leaveAtDoor: Boolean(form.leaveAtDoor),
    },

    payment: {
      method: form.paymentMethod,
      changeFrom: form.changeFrom ? Number(form.changeFrom) : null,
    },

    extras: {
      chopsticks: Number(form.chopsticks) || 0,
      trainingChopsticks: Number(form.trainingChopsticks) || 0,
    },

    pets: {
      hasCat: Boolean(form.hasCat),
      hasDog: Boolean(form.hasDog),
    },

    comment: form.comment?.trim() || '',

    items: items.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      weight: item.weight || '',
    })),

    total,
    status: ORDER_STATUS.NEW,
  }
}
