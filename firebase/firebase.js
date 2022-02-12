import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAtgcw2Coqs6jesRHmptBo3RRauOdlszlg",
  authDomain: "piechart-2022.firebaseapp.com",
  projectId: "piechart-2022",
  storageBucket: "piechart-2022.appspot.com",
  messagingSenderId: "400165265318",
  appId: "1:400165265318:web:0eb268db57e047f851b967",
  measurementId: "G-TQ6HZ0SCQE"
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service 
// const projectFirestore = firebase.firestore();
// const projectAuth = firebase.auth()
const db = firebase.firestore();
//init timestamp
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

export default db