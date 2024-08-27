// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgH5_w-jFhcQl2z5GqCiVgfK4ReulBb-w",
  authDomain: "new-auth-4df68.firebaseapp.com",
  projectId: "new-auth-4df68",
  storageBucket: "new-auth-4df68.appspot.com",
  messagingSenderId: "1046556664996",
  appId: "1:1046556664996:web:8807f449563c14a7f5f231",
  measurementId: "G-9Z283LC3LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
export {firestore}
// export{analytics, auth}
export default app