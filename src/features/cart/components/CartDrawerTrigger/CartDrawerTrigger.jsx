import { useState } from 'react'
import { CartButton } from '@/components/buttons/CartButton/CartButton.jsx'
import { CartDrawer } from '../CartDrawer/CartDrawer.jsx'

export const CartDrawerTrigger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <CartButton onClick={() => setIsOpen(true)} />

      <CartDrawer open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
