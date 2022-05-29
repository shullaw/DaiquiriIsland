// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ffF2pN_Cei9NVabYp4DFnXRtSPeG-Ws",
  authDomain: "daiquiri-island.firebaseapp.com",
  projectId: "daiquiri-island",
  storageBucket: "daiquiri-island.appspot.com",
  messagingSenderId: "253014239986",
  appId: "1:253014239986:web:b074bb938cb035119dfe6b",
  measurementId: "G-7C5YGW6BEQ"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);