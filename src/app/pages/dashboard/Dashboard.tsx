
import { Link } from "react-router-dom"

const Button = () => {
    return (<>
    <h2>Aperte aqui!</h2>
    
    <button >Meu botão</button>
    </>)
}


export const Dashboard = () => {
    return (<div>
        <h1>Dashboard</h1>
        <Button/>
        <Link to="/login">Login</Link>
    </div>
        
    )
}