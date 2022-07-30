import { useContext } from "react";
import { UserLogContext } from "../../../shared/contexts/UserLog";


interface IButtonLoginProps {
    type?: "button"|"submit"|"reset"
    onClick: () => void;

    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {

    const userLogContext = useContext(UserLogContext)
    return(
        <button type={type} onClick={onClick}>
           <p></p>{userLogContext.userName}<p/>{children}
        </button>
    )
}