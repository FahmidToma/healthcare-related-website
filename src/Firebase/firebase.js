import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-auth";

const initializeAuthentication = () =>{
    const app = initializeApp(firebaseConfig);
}
export default initializeAuthentication;
