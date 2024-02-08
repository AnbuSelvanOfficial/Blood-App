import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXQOTv2e_UvKXq8hG3zy3b2Wp-MSzDdq8",
    authDomain: "blood--donation-342c2.firebaseapp.com",
    projectId: "blood--donation-342c2",
    storageBucket: "blood--donation-342c2.appspot.com",
    messagingSenderId: "746436921662",
    appId: "1:746436921662:web:cca953cb90f0b0665a446f"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,
  {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  })
const db = getFirestore();

export {
  app,
  auth,
  db
}