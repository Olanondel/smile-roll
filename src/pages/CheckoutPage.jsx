import { CheckoutLayout } from '../features/checkout/components/CheckoutLayout/CheckoutLayout.jsx'
import CheckoutSidebar from '../features/checkout/components/CheckoutSidebar/CheckoutSidebar.jsx'
import CheckoutFormSection from '../features/checkout/components/CheckoutFormSection/CheckoutFormSection.jsx'
import { Container } from '../components/Container/Container.jsx'
import { useCheckoutForm } from '../features/checkout/hooks/useCheckoutForm.js'
import { FormProvider } from 'react-hook-form'
import { useCheckoutSubmit } from '../features/checkout/hooks/useCheckoutSubmit.js'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes/routes.js'
import { useCart } from '../hooks/useCart.js'
import { MIN_ORDER_PRICE } from '../constants/status.js'
import { useRef } from 'react'

const CheckoutPage = () => {
  const checkout = useCheckoutForm()
  const { submitOrder } = useCheckoutSubmit()
  const navigate = useNavigate()
  const { clear, items, isMinOrderReached } = useCart()
  const addressRef = useRef(null)
  const refs = {
    addressId: addressRef,
  }
  const onSubmit = checkout.form.handleSubmit(
    async (values) => {
      if (!checkout.canSubmit) return

      try {
        await submitOrder(values)
        clear()
        navigate(`${ROUTES.CHECKOUT_SUCCESS}?orderId=83721`, { replace: true })
      } catch (error) {
        console.error('Order submit failed', error)
      }
    },
    (errors) => {
      const firstErrorKey = Object.keys(errors)[0]

      const sectionRef = refs?.[firstErrorKey]

      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
        sectionRef.current.focus?.()
      }
    },
  )

  if (!items.length || !isMinOrderReached) {
    return (
      <Container>
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h4 style={{ marginBottom: 15 }}>
            Корзина пуста или сума заказа меньше {MIN_ORDER_PRICE}
            <br /> пожалуйста вернитесь и выберите
            <br /> ваше блюдо!
          </h4>

          <Link to={ROUTES.HOME}>На главную</Link>
        </div>
      </Container>
    )
  }

  return (
    <FormProvider {...checkout.form}>
      <Container>
        <form onSubmit={onSubmit}>
          <CheckoutLayout sidebar={<CheckoutSidebar />}>
            <CheckoutFormSection addressRef={addressRef} form={checkout.form} />
          </CheckoutLayout>
        </form>
      </Container>
    </FormProvider>
  )
}

export default CheckoutPage
