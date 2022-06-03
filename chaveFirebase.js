
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
apiKey: "AIzaSyCd8BHepAbgzsZF0Ig8NRgsnTPRKvYkO4g",
authDomain: "vexv1-adc55.firebaseapp.com",
databaseURL: "https://vexv1-adc55-default-rtdb.firebaseio.com",
projectId: "vexv1-adc55",
storageBucket: "vexv1-adc55.appspot.com",
messagingSenderId: "827882444760",
appId: "1:827882444760:web:3b65498f6fe2161d1244ad",
measurementId: "G-FBJX3WSQDX"
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
import{getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

export const db = getDatabase();