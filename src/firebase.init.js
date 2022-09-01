// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy7KrRQEfZ7OYCGD6IMFJQ7fm_8hEZzYs",
  authDomain: "design-agency-2ae64.firebaseapp.com",
  projectId: "design-agency-2ae64",
  storageBucket: "design-agency-2ae64.appspot.com",
  messagingSenderId: "170171135882",
  appId: "1:170171135882:web:63217a40f4c1838771fa73"
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;
