import { useCallback, useRef } from "react"
import { useState, useEffect, useMemo } from "react"
import { InputLogin } from "./components/InputLogin"



export const Login = () => {
    //vou entanciar o valor 
const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(()=>{
        console.log('Execute')
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
           
            {/*<label>
                <span>Senha</span>
                <input 
                type="password"
                 value={password} 
                 ref={inputPasswordRef}
                onChange={e => setPassword(e.target.value)}/>
                </label>*/}
                <button type="button" onClick={handleEnter}>
                 Entrar
                </button>
        </form>


    </div>
    
    </>)
}