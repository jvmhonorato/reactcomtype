import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom"
import { Dashboard } from "../pages"


export const Rts = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>

        </Routes>
        </BrowserRouter>
    )
}