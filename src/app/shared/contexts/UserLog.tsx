import { createContext } from "react";


interface IUserLogContextData{
    userName: string
    
}
// criei o as IUserLogContextData como um hack pra o objeto não ficar vazio
const UserLogContext = createContext<IUserLogContextData>({} as IUserLogContextData);

interface IUserLogProviderProps {
    children: React.ReactNode;
}

export const UserLogProvider: React.FC<IUserLogProviderProps> = ({children}) => {
    return (
        /* o value é obrigatório */
        <UserLogContext.Provider value={{userName: 'Victor'}}>
                {children}
        </UserLogContext.Provider>
    )
}