import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { mapOrderToDto } from '../model/mappers'
import { db } from '@/firebase/db.js'

export const createOrder = async ({ form, items, total }) => {
  const payload = {
    ...mapOrderToDto({ form, items, total }),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  console.log(payload)

  const docRef = await addDoc(collection(db, 'orders'), payload)

  return {
    id: docRef.id,
    ...payload,
  }
}
