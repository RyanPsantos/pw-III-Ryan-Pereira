// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBfV87_h8KXyeqRn0lefoJNE4YOEkzeUIc",
    authDomain: "meuprimeirofirebase-30336.firebaseapp.com",
    projectId: "meuprimeirofirebase-30336",
    storageBucket: "meuprimeirofirebase-30336.firebasestorage.app",
    messagingSenderId: "935394570408",
    appId: "1:935394570408:web:8c6f1522a96204c440d29d",
    measurementId: "G-PT7T2ZK4K1"
  };

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firestore e Analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };