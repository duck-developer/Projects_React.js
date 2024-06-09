import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCdI7PQHvc1TfbWP7ZPj-W5rAWPNY9Cefw",
    authDomain: "devlink-d53d8.firebaseapp.com",
    projectId: "devlink-d53d8",
    storageBucket: "devlink-d53d8.appspot.com",
    messagingSenderId: "248170634944",
    appId: "1:248170634944:web:e8bf3e0f0d0b54ddc19725",
    measurementId: "G-Z2RM6EFXC7"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {db,auth}