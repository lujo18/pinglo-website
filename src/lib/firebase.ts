import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

const db = getFirestore()
const functions = getFunctions()

export async function addToWaitlist(payload: { email: string; utm?: Record<string, string> }) {
  const docRef = await addDoc(collection(db, 'waitlist'), {
    email: payload.email,
    utm: payload.utm || null,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

export async function addContactMessage(payload: { name: string; email: string; message: string }) {
  const docRef = await addDoc(collection(db, 'contactMessages'), {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

// Example stub for callable function
export function sendContactEmail(payload: { name: string; email: string; message: string }) {
  try {
    const fn = httpsCallable(functions, 'sendContactEmail')
    return fn(payload)
  } catch (err) {
    // function not deployed/stubbed
    return Promise.reject(err)
  }
}
