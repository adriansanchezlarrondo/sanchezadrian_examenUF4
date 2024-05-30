import { useEffect } from "react"
import { useGlobalContext } from "./GlobalContext"

export default function Header() {
    const { titulo, setTitulo } = useGlobalContext()

    useEffect(() => {
        function ponerTitulo() {
            setTitulo('Adrian')
        }
    
        ponerTitulo()    
    }, [])

    return (
        <div className="bg-success d-flex justify-content-between mx-auto fixed-top">
            <div>
                <h1>HEADER</h1>
            </div>
            <div>
                <h1>{titulo}</h1>
            </div>
        </div>
    )
}
