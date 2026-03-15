import { useCart } from '../../../hooks/useCart.js'

export const useCheckoutSubmit = () => {
  const { items } = useCart()

  const submitOrder = async (values) => {
    console.log('submitOrder', values)

    const payload = {
      customer: {
        firstName: values.firstName,
        phone: values.phone,
      },
      delivery: {
        type: values.deliveryType,
        addressId: values.addressId,
        day: values.deliveryDay,
        time: values.deliveryTime,
        doNotCall: values.doNotCall,
        leaveAtDoor: values.leaveAtDoor,
      },
      payment: {
        method: values.paymentMethod,
        changeFrom: values.changeFrom,
      },
      comment: {
        text: values.comment,
        chopsticks: values.chopsticks,
        trainingChopsticks: values.trainingChopsticks,
        hasCat: values.hasCat,
        hasDog: values.hasDog,
      },
      items,
    }

    console.log('ORDER PAYLOAD', payload)

    // await orderApi.create(payload)
  }

  return { submitOrder }
}
