// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtJrj-4kukbP63a3oqeMIZGA6q5BftZsU',
  authDomain: 'medium-clone-3a678.firebaseapp.com',
  projectId: 'medium-clone-3a678',
  storageBucket: 'medium-clone-3a678.appspot.com',
  messagingSenderId: '472822419225',
  appId: '1:472822419225:web:dc18504ddc41aa1e1abf88',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
