
import { useCallback } from "react"
import { useState } from "react"







export const Dashboard = () => {
    const [list, setList] = useState<string[]>(['teste 1','teste 2','teste 3'])

    const handleInputKeyDown:React.KeyboardEventHandler<HTMLInputElement> = useCallback((e)=> {
        if (e.key ==='Enter'){
           
           if(e.currentTarget.value.trim().length === 0) return

           const value = e.currentTarget.value;
           //pra limpar
           e.currentTarget.value = ''

           //setList([...list, e.currentTarget.value]) com depêndecia
           setList((oldList) => {
            //condicional pra tratar caso ja haja valor inserido
            if (oldList.includes(value)) return oldList

            return [...oldList, value]
           })
        }
    },[])
    


    
    return (<div>
        <h1>Lista</h1>
        <input
        onKeyDown={handleInputKeyDown}/>
        <ul>
        {list.map((value, index) => {
            return <li key={value}>{value}</li>;
        })}
        </ul>
        
        
    </div>
        
    )
}