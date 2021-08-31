import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiP1VAPHdiY_PEL7GolBq4qxNX1nfXy00',
  authDomain: 'simple-d5eb6.firebaseapp.com',
  projectId: 'simple-d5eb6',
  storageBucket: 'simple-d5eb6.appspot.com',
  messagingSenderId: '994597974008',
  appId: '1:994597974008:web:8eb6589c174600bdd8b00d',
  measurementId: 'G-K862J0EKHL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
