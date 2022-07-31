import { useCallback, useContext, useRef } from "react"
import { useState, useMemo } from "react"
import { UserLogContext } from "../../shared/contexts/UserLog"
import { ButtonLogin } from "./components/ButtonLogin"
import { InputLogin } from "./components/InputLogin"



export const Login = () => {
    //vou entanciar o valor 
const inputPasswordRef = useRef<HTMLInputElement>(null)
const {userName, logout} = useContext(UserLogContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(()=>{
        
        return email.length * 10
        
    },[email.length])

    const handleEnter = useCallback(() => {
        // alert(email)
        // alert(password)
         console.log(email)
         console.log(password)
         if (inputPasswordRef.current !== null){
         inputPasswordRef.current.focus()
        }
     },[email, password]);
   
    return(
    <>
    <div>
        <form>
            <p>{userName}</p>
         <p>Quantidade de caracteres do email: {emailLength}</p>
         <InputLogin
         
         label="Email"
         value={email}
         onChange={newValue => setEmail(newValue)}
         onPressEnter={() => inputPasswordRef.current?.focus()}
         />
         <InputLogin
         label="senha"
         value={password}
         type="password"
         ref={inputPasswordRef}
         onChange={newValue => setPassword(newValue)}
         
         />
           
        
                
                <ButtonLogin type="button" onClick={handleEnter}>
                Enter
                </ButtonLogin>
        </form>


    </div>
    
    </>)
}