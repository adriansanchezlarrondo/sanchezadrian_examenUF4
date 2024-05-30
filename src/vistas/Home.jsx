import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

export default function Home() {
    const { obtenerHistoria, historias } = useGlobalContext()

    useEffect(() => {
        obtenerHistoria()
    }, [])

    return (
        <div className="d-flex justify-content-between mx-auto">
            <div>
                <h1 className="mt-5">Home</h1>
                {historias.map((historia, index) => (
                    <ul key={index} className="list-unstyled ms-5">
                        <li>{historia.titulo}</li>
                        <li>{historia.fecha}</li>
                        <li>{historia.experiencia}</li>
                        <li style={{ width: '250px' }}><img className="img-fluid" src={historia.imagen} alt={historia.titulo} /></li>
                    </ul>
                ))}
            </div>
        </div>
    )
}
