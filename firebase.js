import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domai",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "44887461779",
  appId: "your-sender-id",
  measurementId: "your-app-id"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  db
}
