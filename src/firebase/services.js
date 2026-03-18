import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase'

export async function addUser() {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'Oleg',
      age: 25,
    })

    console.log('Документ добавлен:', docRef.id)
  } catch (e) {
    console.error('Ошибка:', e)
  }
}
