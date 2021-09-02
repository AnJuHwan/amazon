import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiP1VAPHdiY_PEL7GolBq4qxNX1nfXy00',
  authDomain: 'simple-d5eb6.firebaseapp.com',
  projectId: 'simple-d5eb6',
  storageBucket: 'simple-d5eb6.appspot.com',
  messagingSenderId: '994597974008',
  appId: '1:994597974008:web:8eb6589c174600bdd8b00d',
  measurementId: 'G-K862J0EKHL',
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
export { auth };
// export { db, auth };
