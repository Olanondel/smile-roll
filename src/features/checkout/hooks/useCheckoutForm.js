import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCart } from '../../../hooks/useCart.js'
import { MIN_ORDER_PRICE } from '../../../constants/status.js'
import { checkoutSchema } from '../validation/validation.js'

export const useCheckoutForm = () => {
  const { items, total } = useCart()

  const form = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      phone: '',

      deliveryType: 'delivery',
      addressId: null,

      deliveryDay: 'today',
      deliveryTime: 'nearest',

      doNotCall: false,
      leaveAtDoor: false,

      paymentMethod: 'cash',
      changeFrom: '',

      chopsticks: 4,
      trainingChopsticks: 1,
      comment: '',

      hasCat: false,
      hasDog: false,
    },
    mode: 'onChange',
  })

  const isMinOrderReached = total >= MIN_ORDER_PRICE
  const canSubmit = items.length > 0 && isMinOrderReached

  return {
    form,
    total,
    isMinOrderReached,
    canSubmit,
  }
}
