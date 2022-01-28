import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXdY1LJ1XYkt7c6NNGDmgu37yaLQW7Rm4",
    authDomain: "questionnaire-bbfa6.firebaseapp.com",
    projectId: "questionnaire-bbfa6",
    storageBucket: "questionnaire-bbfa6.appspot.com",
    messagingSenderId: "481615589476",
    appId: "1:481615589476:web:daffa87191aef23b592f71",
    measurementId: "G-ZEM8VSFTFR"
}

firebase.initializeApp(firebaseConfig)

export default firebase