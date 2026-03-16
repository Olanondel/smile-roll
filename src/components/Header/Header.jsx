import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { CartDrawerTrigger } from '../../features/cart/components/CartDrawerTrigger/CartDrawerTrigger.jsx'
import { CartPopoverTrigger } from '../../features/cart/components/CartPopoverTrigger/CartPopoverTrigger.jsx'
import { Container } from '../Container/Container.jsx'

import Logo from '../../assets/images/icons/logo.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/routes.js'
import NotificationButton from '../buttons/NotificationButton/NotificationButton.jsx'

import HeartButton from '../../assets/icons/heart.svg?react'
import { useFavorites } from '../../features/favorites/hooks/useFavorites.js'

const Header = ({ styles }) => {
  const isMobile = useMediaQuery(768)
  const { favoritesCount } = useFavorites()

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

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <NotificationButton
              as={Link}
              to={ROUTES.ACCOUNT_FAVORITES}
              icon={HeartButton}
              count={favoritesCount}
            />

            {isMobile ? <CartDrawerTrigger /> : <CartPopoverTrigger />}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
