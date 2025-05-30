import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4FKylnm0z2sT2PXj23CbKzpSVUwNhZ9I",
  authDomain: "todoapp-c6069.firebaseapp.com",
  projectId: "todoapp-c6069",
  storageBucket: "todoapp-c6069.firebasestorage.app",
  messagingSenderId: "44887461779",
  appId: "1:44887461779:web:d88c53b37a1a5fab68a266",
  measurementId: "G-NR8M5FWV4E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  db
}