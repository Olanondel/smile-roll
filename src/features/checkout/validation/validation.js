import { z } from 'zod'

export const checkoutSchema = z
  .object({
    firstName: z.string().min(1, 'Введите имя'),
    phone: z.string().min(1, 'Введите телефон'),

    deliveryType: z.enum(['delivery', 'pickup']),
    addressId: z.string().nullable(),

    deliveryDay: z.string().min(1, 'Выберите день'),
    deliveryTime: z.string().min(1, 'Выберите время'),

    doNotCall: z.boolean(),
    leaveAtDoor: z.boolean(),

    paymentMethod: z.enum(['cash', 'terminal', 'card', 'bitpay']),
    changeFrom: z.string(),

    chopsticks: z.coerce.number().min(0),
    trainingChopsticks: z.coerce.number().min(0),
    comment: z.string(),

    hasCat: z.boolean(),
    hasDog: z.boolean(),
  })
  .superRefine((values, ctx) => {
    if (values.deliveryType === 'delivery' && !values.addressId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['addressId'],
        message: 'Выберите адрес доставки',
      })
    }
  })
