import { Outlet } from 'react-router-dom'
import { ProfileSidebar } from '../../../features/profile/components/ProfileSidebar/ProfileSidebar.jsx'

import styles from './AccountLayout.module.css'
import { Container } from '../../../components/Container/Container.jsx'
import AccountCard from '../../../features/profile/components/AccountCard/AccountCard.jsx'

export default function AccountLayout() {
  return (
    <Container>
      <section className={styles.section}>
        <div className={styles.sidebar}>
          <AccountCard style={{ marginBottom: '2em' }} />

          <ProfileSidebar />
        </div>

        <div>
          <Outlet />
        </div>
      </section>
    </Container>
  )
}
