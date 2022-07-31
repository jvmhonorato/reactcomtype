import { createContext, useCallback } from "react";


interface IUserLogContextData{
    userName: string
    logout: () => void
    
}
// criei o as IUserLogContextData como um hack pra o objeto não ficar vazio
export const UserLogContext = createContext<IUserLogContextData>({} as IUserLogContextData);

interface IUserLogProviderProps {
    children: React.ReactNode;
}

export const UserLogProvider: React.FC<IUserLogProviderProps> = ({children}) => {
    const  handleLogout = useCallback(()=>{
        console.log('O usuário Logout')
    },[])

    return (
        /* o value é obrigatório */
        <UserLogContext.Provider value={{ userName: 'Victor' ,logout: handleLogout}}>
                {children}
        </UserLogContext.Provider>
    )
}