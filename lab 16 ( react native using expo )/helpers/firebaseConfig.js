// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
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

