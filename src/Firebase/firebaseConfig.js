import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

// Web app's Firebase configuration
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
const auth = getAuth(app);

export { auth };