import { useSearchParams } from 'react-router-dom'
import CheckoutSuccessSection from '../features/checkout/sections/CheckoutSuccessSection/CheckoutSuccessSection.jsx'
import { Container } from '../components/Container/Container.jsx'

export const CheckoutSuccessPage = () => {
  const [searchParams] = useSearchParams()
  const orderId = searchParams.get('orderId')

  if (!orderId) {
    return null
  }

  return (
    <Container>
      <CheckoutSuccessSection
        orderId={orderId}
        address="проспект Науки, 13 До двери, кв 10 этаж 5"
        time="12 июля 12:00"
        paymentMethod="Наличными курьеру"
        total="338 грн"
        changeFrom="500 грн"
        peopleCount="4"
        note="Не звонить в дверь"
      />
    </Container>
  )
}
