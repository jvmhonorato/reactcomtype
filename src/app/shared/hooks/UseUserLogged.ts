import { useContext } from "react"
import { UserLogContext } from "../contexts/UserLog"



export const useUserLogged = () => {
const context = useContext(UserLogContext)
return context;
}