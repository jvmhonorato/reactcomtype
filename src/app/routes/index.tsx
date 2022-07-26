import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom"
import { Dashboard, Login } from "../pages"


export const Rts = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Dashboard/>}/>
            
            <Route path="/login" element={<Login/>}/>

        </Routes>
        </BrowserRouter>
    )
}