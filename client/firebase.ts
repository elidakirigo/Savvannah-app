import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDlKeHSejq-dMBfBYbBBflugAQRhJUP-Sw',
	authDomain: 'chatgpt-messenger-8b620.firebaseapp.com',
	projectId: 'chatgpt-messenger-8b620',
	storageBucket: 'chatgpt-messenger-8b620.appspot.com',
	messagingSenderId: '791147577869',
	appId: '1:791147577869:web:9e39789da0986b638c0b44',
	measurementId: 'G-TP04TMG61Y',
}

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig) 
const analytics = getAnalytics(app) 
const db = getFirestore(app) 
export { db }
