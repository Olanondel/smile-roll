import styles from './Section.module.css'

export const Section = ({ title, description, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  )
}
