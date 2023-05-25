// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5a70z28iWYmUcp3DxxiURUoDbWtSW22M",
    authDomain: "bistro-boss-restraurant.firebaseapp.com",
    projectId: "bistro-boss-restraurant",
    storageBucket: "bistro-boss-restraurant.appspot.com",
    messagingSenderId: "843804032827",
    appId: "1:843804032827:web:906fffe09cef216a5c011e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;