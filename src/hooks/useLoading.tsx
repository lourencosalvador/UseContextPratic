import { useEffect, useState } from "react"



export function useLoading(){
    const [state, setState] = useState(false)
    
    useEffect(()=> {
        setTimeout(()=> { 
          setState(true)
        }, 2000)
})

   return {
    status: state
   }
}