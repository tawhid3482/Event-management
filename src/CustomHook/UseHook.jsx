import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const UseHook = () => {
    const all = useContext(authContext)
    
    return all
};

export default UseHook;