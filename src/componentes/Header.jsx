import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

export default function Header() {
    const { titulo, setTitulo } = useGlobalContext()

    useEffect(() => {
        function ponerTitulo() {
            setTitulo('Adrian')
        }
    
        ponerTitulo()    
    }, [])

    return (
        <div className="bg-info">         
            <ul className="d-flex justify-content-around px-5 nav">
                <li className="">
                    <div className="nav-link text-bg-info fw-bold fs-1">{ titulo }</div>
                </li>
                <li className="">
                    <Link to="/" className="nav-link text-bg-info fw-bold fs-1">
                        Home
                    </Link>
                </li>
                <li className="">
                    <Link to="/ranking" className="nav-link text-bg-info fw-bold fs-1">
                        Ranking
                    </Link>
                </li>
            </ul>
        </div>
      )
}
