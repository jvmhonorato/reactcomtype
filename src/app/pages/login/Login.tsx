import { useState, useEffect, useMemo } from "react"


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(()=>{
        console.log('Execute')
        return email.length * 10
        
    },[email.length])

    const handleEnter = () => {
       // alert(email)
       // alert(password)
        console.log(email)
        console.log(password)
    }
  
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
                />
            </label>
            <label>
                <span>Senha</span>
                <input 
                type="password"
                 value={password} 
                onChange={e => setPassword(e.target.value)}/>
            </label>
                <button type="button" onClick={handleEnter}>
                 Entrar
                </button>
        </form>


    </div>
    
    </>)
}