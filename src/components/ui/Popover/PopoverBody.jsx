import styles from './Popover.module.css'

export const PopoverBody = ({ children, className = '' }) => {
  return <div className={[styles.body, className].filter(Boolean).join(' ')}>{children}</div>
}
