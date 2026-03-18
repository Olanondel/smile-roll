import styles from './Loader.module.css'

import LoadingImage from '../../assets/images/loading.gif'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={LoadingImage} alt="" className={styles.loaderImage} />
    </div>
  )
}

export default Loader
