
import { useUserLogged } from "../../../shared/hooks";


interface IButtonLoginProps {
    type?: "button"|"submit"|"reset"
    onClick: () => void;

    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {

    const {userName}= useUserLogged()
    return(
        <button type={type} onClick={onClick}>
           <p></p>{userName}<p/>{children}
        </button>
    )
}