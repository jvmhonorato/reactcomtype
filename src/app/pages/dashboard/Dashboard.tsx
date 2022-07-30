
import { useContext, useRef } from "react"
import { Link } from "react-router-dom"

import { UserLogContext } from "../../shared/contexts/UserLog"




export const Dashboard = () => {
    const counterRef = useRef({counter: 0})


    const userLogContext = useContext(UserLogContext)
    return (<div>
        <h1>Dashboard</h1>
        <p>{userLogContext.userName}</p>
        <p>Contador: {counterRef.current.counter}</p>

        <button onClick={() => counterRef.current.counter++}>Somar</button>
        <button onClick={() =>console.log(counterRef.current.counter)}>Somar</button>
        
        <Link to="/login">Login</Link>
    </div>
        
    )
}