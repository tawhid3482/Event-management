
import { Navigate, useLocation } from "react-router-dom";
import UseHook from "../CustomHook/UseHook";

const PrivateProvider = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user,loader}=UseHook()
    if(loader){
        return <div className="">
            <span className="loading loading-spinner bg-red-500 loading-lg"></span>
        </div>
    }
    if(!user){ 
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children
};


export default PrivateProvider;