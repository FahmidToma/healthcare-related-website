import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-auth";

const firebaseAuth = () =>{
    const app = initializeApp(firebaseConfig);
}
export default firebaseAuth;
