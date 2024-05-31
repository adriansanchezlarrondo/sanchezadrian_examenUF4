import { useState, useEffect } from "react"
// import { useGlobalContext } from "../context/GlobalContext"

export default function TablaResueltos() {
    // const { dades, setDades } = useGlobalContext()
    const [ resueltos, setResueltos] = useState([])

    useEffect(() => {
        const obtenerTicketResuelto = async () => {
            try {
                const response = await fetch('https://json-server-examen-uf-4.vercel.app/ticketsResueltos', { method: 'GET' }).then(res => res.json())
                const data = await Promise.all(response)
                console.log('resueltos', data);

                if (Array.isArray(data)) {
                    setResueltos(data);
                } else {
                    console.error('Data is not an array:', data);
                }
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        obtenerTicketResuelto()
    }, [])

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
                </tbody>
            </table>
        </>
    )
}
