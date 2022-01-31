import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyCUPbL0TfRzXxCD56rfvq7AfTdPkNVY7JM",
    authDomain: "disneyplus-clone-4844b.firebaseapp.com",
    projectId: "disneyplus-clone-4844b",
    storageBucket: "disneyplus-clone-4844b.appspot.com",
    messagingSenderId: "28888286177",
    appId: "1:28888286177:web:0d368fd476bdedebee48a0",
    measurementId: "G-HWWEFCL86P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =  firebase.storage();

export { auth, provider, storage };
export default db;