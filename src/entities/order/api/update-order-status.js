import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/db.js'

export const updateOrderStatus = async (orderId, status) => {
  const ref = doc(db, 'orders', orderId)

  await updateDoc(ref, {
    status,
    updatedAt: serverTimestamp(),
  })
}
