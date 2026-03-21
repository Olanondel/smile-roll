import styles from './FilterChip.module.css'
import clsx from 'clsx'

function FilterChip({ inputProps, checked, disabled, children }) {
  return (
    <label className={clsx(styles.root, checked && styles.active, disabled && styles.disabled)}>
      <input className={styles.input} {...inputProps} />
      <span className={styles.content}>{children}</span>
    </label>
  )
}

export default FilterChip
