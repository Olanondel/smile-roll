import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from '@/firebase/firebase.js'

export const db = getFirestore(firebaseApp)
