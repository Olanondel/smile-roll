import { NavLink } from 'react-router-dom'

import styles from './ProfileSidebar.module.css'

import { ROUTES } from '../../../../routes/routes.js'

export function ProfileSidebar() {
  return (
    <nav className={styles.nav}>
      <NavLink to={ROUTES.ACCOUNT} className={styles.navItem}>
        История заказов
      </NavLink>
      <NavLink to={ROUTES.ACCOUNT_FAVORITES} className={styles.navItem}>
        Избранные товары
      </NavLink>
      {/*<NavLink to="/profile/address" className={styles.navItem}>*/}
      {/*  Адрес доставки*/}
      {/*</NavLink>*/}
      {/*<NavLink to="/profile/theme" className={styles.navItem}>*/}
      {/*  Тема сайта*/}
      {/*</NavLink>*/}
    </nav>
  )
}
