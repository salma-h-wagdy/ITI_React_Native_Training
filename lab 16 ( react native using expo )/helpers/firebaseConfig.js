// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4CkIjeMySlNP0cuPM7KypjxSUbMSV2O8",
  authDomain: "fir-project-a382b.firebaseapp.com",
  projectId: "fir-project-a382b",
  storageBucket: "fir-project-a382b.appspot.com",
  messagingSenderId: "216530332004",
  appId: "1:216530332004:web:c943dc7323c167ebd77271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export const getFavorites = async () => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user is signed in.");
    return [];
  }
  const userId = user.uid;
  const collectionRef = firestore.collection('users').doc(userId).collection('favorites');
  const querySnapshot = await collectionRef.get();
  if (querySnapshot.empty) {
    return [];
  } else {
    const documents = querySnapshot.docs.map(doc => doc.data());
    return documents;
  }
};

export const toggleFavorite = async (movie) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user is signed in.");
    return;
  }
  const userId = user.uid;
  const movieRef = firestore.collection('users').doc(userId).collection('favorites').doc(movie.id.toString());

  const doc = await movieRef.get();
  if (doc.exists) {
    // Movie is already in favorites, remove it
    await movieRef.delete();
  } else {
    // Add movie to favorites
    await movieRef.set(movie);
  }
};

export const removeFavorite = async (movie) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user is signed in.");
    return;
  }
  const userId = user.uid;
  const movieRef = firestore.collection('users').doc(userId).collection('favorites').doc(movie.id.toString());

  await movieRef.delete();
};

