import styles from './AccountCard.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../auth/selectors.js'

export default function AccountCard({ avatar = '/images/avatar.png', onEdit, ...props }) {
  const user = useSelector(selectUser)

  const userName = user.displayName || 'unknown'

  return (
    <article className={styles.card} {...props}>
      <img className={styles.avatar} src={avatar} alt={userName} />

      <div className={styles.content}>
        <h3 className={styles.name}>{userName}</h3>
        <a className={styles.email} href={`mailto:${user.email}`}>
          {user.email}
        </a>
        {user.phoneNumber && (
          <a className={styles.phone} href={`tel:${user.phoneNumber.replace(/\s+/g, '')}`}>
            {user.phoneNumber}
          </a>
        )}
      </div>

      <button
        type="button"
        className={styles.editButton}
        onClick={onEdit}
        aria-label="Редактировать профиль"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={styles.editIcon}>
          <path
            d="M4 16.75V20h3.25l9.58-9.57-3.25-3.25L4 16.75Zm14.71-8.04a1.003 1.003 0 0 0 0-1.42l-2-2a1.003 1.003 0 0 0-1.42 0l-1.17 1.17 3.25 3.25 1.34-1Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </article>
  )
}
