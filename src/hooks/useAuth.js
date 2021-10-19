import { useContext } from "react"
import { AuthContext } from "../Context/authprovider"

const useAuth =() =>{
    return useContext(AuthContext);
}
export default useAuth;
