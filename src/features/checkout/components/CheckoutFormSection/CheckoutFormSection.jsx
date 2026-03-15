import { PersonalInfoSection } from '../../sections/PersonalInfoSection/PersonalInfoSection.jsx'
import { PaymentSection } from '../../sections/PaymentSection/PaymentSection.jsx'

import styles from './CheckoutFormSection.module.css'
import { DeliverySection } from '../../sections/DeliverySection/DeliverySection.jsx'
import { DeliveryTimeSection } from '../../sections/DeliveryTimeSection/DeliveryTimeSection.jsx'
import { CommentSection } from '../../sections/CommentSection/CommentSection.jsx'

const addresses = [
  {
    id: '1',
    city: 'Киев',
    street: 'Николая Краснова',
    house: '16',
    apartment: '104',
    entrance: '5',
    floor: '3',
  },
  {
    id: '2',
    city: 'Киев',
    street: 'Большая Китаевская',
    house: '16',
    apartment: '104',
    entrance: '3',
    floor: '5',
  },
  {
    id: '3',
    city: 'Львов',
    street: 'Октябрьская',
    house: '6',
    apartment: '104',
    entrance: '5',
    floor: '3',
  },
]

const CheckoutFormSection = ({ form, addressRef }) => {
  return (
    <div className={styles.root}>
      <PersonalInfoSection form={form} />
      <DeliverySection addressRef={addressRef} addresses={addresses} form={form} />
      <DeliveryTimeSection form={form} />
      <PaymentSection form={form} />
      <CommentSection form={form} />
    </div>
  )
}

export default CheckoutFormSection
