import { useCallback, useRef } from "react"
import { useState, useEffect, useMemo } from "react"



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
            <label>
                <span>Email</span>
                <input 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key ==='Enter' ? inputPasswordRef.current?.focus() : undefined}
                
                />
            </label>
            <label>
                <span>Senha</span>
                <input 
                type="password"
                 value={password} 
                 ref={inputPasswordRef}
                onChange={e => setPassword(e.target.value)}/>
            </label>
                <button type="button" onClick={handleEnter}>
                 Entrar
                </button>
        </form>


    </div>
    
    </>)
}