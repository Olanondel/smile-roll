import { forwardRef } from 'react'
import LogoIcon from '../../../assets/icons/logo.svg'

export const CartButton = forwardRef(({ open, ...props }, ref) => {
  return (
    <button onClick={open} ref={ref} {...props}>
      Корзина
      <img src={LogoIcon} alt="" />
    </button>
  )
})
