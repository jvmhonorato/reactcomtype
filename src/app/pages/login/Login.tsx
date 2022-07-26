import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/home')
    }
    return(<>
    <div>
        Login
        <button onClick={handleClick}>Home</button>

    </div>
    
    </>)
}