import { useGlobalContext } from "../context/GlobalContext"

export default function TablaPendientes() {
    // const { obtenerHistoria, historias } = useGlobalContext()

    // useEffect(() => {
    //     obtenerHistoria()
    // }, [])

    const { dades } = useGlobalContext()

    const pendientes = dades.ticketsPendientes

    console.log('pendientes', pendientes);

    return (
        <>
            <h2 className="mt-5">Tickets pendientes</h2>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pendientes.map((pendiente, index) => (
                        <tr key={index}>
                            <td>{pendiente.codigo}</td>
                            <td>{pendiente.fecha}</td>
                            <td>{pendiente.aula}</td>
                            <td>{pendiente.grupo}</td>
                            <td>{pendiente.ordenador}</td>
                            <td>{pendiente.descripcion}</td>
                            <td>{pendiente.alumno}</td>
                            <td>
                                <button className="btn btn-success" title="Resolver ticket">Resolver</button>
                                </td>
                            <td>
                                <button className="btn btn-warning" title="Añadir comentario">
                                    <i className="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-info" title="Ver comentarios">
                                    <i className="bi bi-chat-left-text"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger" title="Eliminar ticket">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
