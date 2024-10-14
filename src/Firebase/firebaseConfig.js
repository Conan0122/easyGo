import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

// Web app's Firebase configuration
// NOTE: [IMPORTANT] Save these in .env file.
const firebaseConfig = {
    apiKey: "AIzaSyBNXfzL8qQGqPshQO-t_gHJ5BPHp4AN34M",
    authDomain: "easygo-9e917.firebaseapp.com",
    projectId: "easygo-9e917",
    storageBucket: "easygo-9e917.appspot.com",
    messagingSenderId: "455478621024",
    appId: "1:455478621024:web:d77215de4a8ac0bc786405",
    measurementId: "G-08RWWYTBEH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);      // Export auth from this file
const db = getFirestore(app);   // Export db from this file
const storage = getStorage(app);

export { auth, db, storage };