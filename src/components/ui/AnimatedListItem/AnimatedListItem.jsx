import { motion } from 'framer-motion'

export const AnimatedListItem = ({ children }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 60, height: 0 }}
      transition={{ duration: 0.25 }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  )
}
