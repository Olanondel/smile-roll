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

const CheckoutPage = () => {
  const checkout = useCheckoutForm()
  const { submitOrder } = useCheckoutSubmit()
  const navigate = useNavigate()
  const { clear, items } = useCart()

  const onSubmit = checkout.form.handleSubmit(async (values) => {
    if (!checkout.canSubmit) return

    try {
      await submitOrder(values)
      clear()
      navigate(`${ROUTES.CHECKOUT_SUCCESS}?orderId=83721`, { replace: true })
    } catch (error) {
      console.error('Order submit failed', error)
    }
  })

  if (!items.length) {
    return (
      <Container>
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h4 style={{ marginBottom: 15 }}>
            Корзина пуста,
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
            <CheckoutFormSection form={checkout.form} />
          </CheckoutLayout>
        </form>
      </Container>
    </FormProvider>
  )
}

export default CheckoutPage
