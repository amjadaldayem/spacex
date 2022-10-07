import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyDTMsY29A-nMAesFn-C9JfIM3T4iVXc9dg",
    authDomain: "spacex-dragon.firebaseapp.com",
    projectId: "spacex-dragon",
    storageBucket: "spacex-dragon.appspot.com",
    messagingSenderId: "777413022181",
    appId: "1:777413022181:web:ceb42bf8e2e18236e35f0c"
};

const app = initializeApp(firebaseConfig);