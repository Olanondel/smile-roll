import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { CartDrawerTrigger } from '../../features/cart/components/CartDrawerTrigger/CartDrawerTrigger.jsx'
import { CartPopoverTrigger } from '../../features/cart/components/CartPopoverTrigger/CartPopoverTrigger.jsx'
import { Container } from '../Container/Container.jsx'

import Logo from '../../assets/images/icons/logo.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/routes.js'

const Header = ({ styles }) => {
  const isMobile = useMediaQuery(768)

  return (
    <header style={styles}>
      <Container>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link to={ROUTES.HOME}>
            <img src={Logo} alt="" style={{ top: 0, right: 0, width: 58 }} />
          </Link>

          <div style={{ marginLeft: 'auto' }}>
            {isMobile ? <CartDrawerTrigger /> : <CartPopoverTrigger />}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
