import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase/db.js'

export const getOrders = async () => {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
