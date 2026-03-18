import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { CartDrawerTrigger } from '../../features/cart/components/CartDrawerTrigger/CartDrawerTrigger.jsx'
import { CartPopoverTrigger } from '../../features/cart/components/CartPopoverTrigger/CartPopoverTrigger.jsx'
import { Container } from '../Container/Container.jsx'

import Logo from '../../assets/images/icons/logo.png?react'
import LogoutIcon from '../../assets/icons/logout.svg?react'
import HeartIcon from '../../assets/icons/heart.svg?react'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/routes.js'
import NotificationButton from '../buttons/NotificationButton/NotificationButton.jsx'

import { useFavorites } from '../../features/favorites/hooks/useFavorites.js'
import { handleLogout } from '../../firebase/auth.js'

const Header = ({ styles }) => {
  const isMobile = useMediaQuery(768)
  const { favoritesCount } = useFavorites()

  const logout = async () => {
    try {
      await handleLogout()
    } catch (err) {
      console.log(err)
    }
  }

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
              icon={HeartIcon}
              count={favoritesCount}
            />

            {isMobile ? <CartDrawerTrigger /> : <CartPopoverTrigger />}

            <NotificationButton icon={LogoutIcon} onClick={logout} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
