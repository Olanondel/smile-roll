import clsx from 'clsx'
import styles from './NotificationButton.module.css'

export default function NotificationButton({
  icon: Icon,
  count = 0,
  className,
  showZero = false,
  maxCount = 99,
  as: Component = 'button',
  ...props
}) {
  const safeCount = Number.isFinite(count) && count >= 0 ? count : 0
  const showBadge = showZero || safeCount > 0
  const displayCount = safeCount > maxCount ? `${maxCount}+` : safeCount

  return (
    <Component className={clsx(styles.button, className)} {...props}>
      {Icon && <Icon className={styles.icon} />}

      {showBadge && (
        <span className={styles.badge} aria-hidden="true">
          {displayCount}
        </span>
      )}
    </Component>
  )
}
