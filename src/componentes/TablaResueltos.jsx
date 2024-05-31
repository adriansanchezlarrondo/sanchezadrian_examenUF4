import { useGlobalContext } from "../context/GlobalContext"

export default function TablaResueltos() {
    // const { obtenerHistoria, historias } = useGlobalContext()

    // useEffect(() => {
    //     obtenerHistoria()
    // }, [])

    const { dades } = useGlobalContext()

    const resueltos = dades.ticketsResueltos

    console.log('resueltos', resueltos);

    return (
        <>
            <h2 className="mt-5">Tickets resueltos</h2>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Fecha resuelto</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {resueltos.map((resuelto, index) => (
                        <tr key={index}>
                            <td>{resuelto.codigo}</td>
                            <td>{resuelto.fecha}</td>
                            <td>{resuelto.fecha_resuelto}</td>
                            <td>{resuelto.aula}</td>
                            <td>{resuelto.grupo}</td>
                            <td>{resuelto.ordenador}</td>
                            <td>{resuelto.descripcion}</td>
                            <td>{resuelto.alumno}</td>
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
                    {/* <tr>
                        <td>123459</td>
                        <td>18/04/2023</td>
                        <td>T6</td>
                        <td>DAW1</td>
                        <td>PC3</td>
                        <td>Error de impresora</td>
                        <td>Ana Martínez</td>
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
                    <tr>
                        <td>123459</td>
                        <td>18/04/2023</td>
                        <td>T6</td>
                        <td>DAW1</td>
                        <td>PC3</td>
                        <td>Error de impresora</td>
                        <td>Ana Martínez</td>
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
                    <tr>
                        <td>123459</td>
                        <td>18/04/2023</td>
                        <td>T6</td>
                        <td>DAW1</td>
                        <td>PC3</td>
                        <td>Error de impresora</td>
                        <td>Ana Martínez</td>
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
                    <tr>
                        <td>123459</td>
                        <td>18/04/2023</td>
                        <td>T6</td>
                        <td>DAW1</td>
                        <td>PC3</td>
                        <td>Error de impresora</td>
                        <td>Ana Martínez</td>
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
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}
