import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { CartDrawerTrigger } from '../../features/cart/components/CartDrawerTrigger/CartDrawerTrigger.jsx'
import { CartPopoverTrigger } from '../../features/cart/components/CartPopoverTrigger/CartPopoverTrigger.jsx'

const Header = () => {
  const isMobile = useMediaQuery(768)

  return (
    <header>
      <div>{isMobile ? <CartDrawerTrigger /> : <CartPopoverTrigger />}</div>
    </header>
  )
}

export default Header
