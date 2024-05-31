import { Link } from "react-router-dom"

export default function Header() {

    return (
        <div className="bg-secondary-subtle d-flex justify-content-between align-items-center px-5">
            <div>
                Gestión de Incidencias FPLlefià
            </div>
            <div>
                <ul className="d-flex justify-content-center px-5 nav">
                    <li className="bg-dark p-2 m-1">
                        <Link to="/" className="text-bg-dark text-decoration-none text-uppercase fs-5">
                            Home
                        </Link>
                    </li>
                    <li className="bg-dark p-2 m-1">
                        <Link to="/login" className="text-bg-dark text-decoration-none text-uppercase fs-5">
                            Login
                        </Link>
                    </li>
                    <li className="bg-dark p-2 m-1">
                        <Link to="/registro" className="text-bg-dark text-decoration-none text-uppercase fs-5">
                            Registro
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <span>administrador@fpllefia.com</span>
            </div>
        </div>
      )
}
