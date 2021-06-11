import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7jpI7noC94KW1vXp1Se5FiZyG7SdZQo4",
    authDomain: "facebookclone-a1347.firebaseapp.com",
    projectId: "facebookclone-a1347",
    storageBucket: "facebookclone-a1347.appspot.com",
    messagingSenderId: "8427998429",
    appId: "1:8427998429:web:adcb4a77b538919ad7df34"
});

const db = firebase.firestore();/* banco de dados*/
const auth = firebase.auth();/* para usar login, face, google*/
const storage = firebase.storage();/*armazena arquivos, imagens */
const functions = firebase.functions();/**/


export {db, auth, storage, functions};