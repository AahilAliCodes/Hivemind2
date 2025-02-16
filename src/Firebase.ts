import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration here
  // Get this from your Firebase Console
  apiKey: "AIzaSyDBxKP2bayZlDqe-aLy5YFvlmoTDFjz_e0",
  authDomain: "your-auth-domain",
  projectId: "hivemind-cb528",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);