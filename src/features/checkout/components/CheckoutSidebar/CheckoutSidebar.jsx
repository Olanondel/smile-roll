import React from 'react'
import { CartList } from '../../../cart/components/CartList/CartList.jsx'
import MinOrderWarning from '../../../../components/shared/MinOrderWarning.jsx'
import CheckoutFooter from '../CheckoutFooter/CheckoutFooter.jsx'

const CheckoutSidebar = () => {
  return (
    <div>
      <CartList />

      <CheckoutFooter />
      <MinOrderWarning />
    </div>
  )
}

export default CheckoutSidebar
