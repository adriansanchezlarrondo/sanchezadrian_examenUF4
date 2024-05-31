// import { useState, useEffect } from "react"
// import { useGlobalContext } from "../context/GlobalContext"

export default function TablaPendientes({ pendientes }) {
    // const { dades, obtenerTicket } = useGlobalContext()
    // const [ pendientes, setPendientes] = useState([])
    
    // useEffect(() => {
    //     async function getTicketsPendientes() {
    //         await obtenerTicket()

    //         // setPendientes(dades[0].ticketsPendientes);
    //     }
        
    //     getTicketsPendientes()
    // }, [])

    async function borrarTicket(id) {
        console.log('codigo/id', id);

        try {
            const response = await fetch(`https://json-server-examen-uf-4.vercel.app/tickets/${id}`, { method: 'DELETE' })//.then(res => res.json())

            if (!response.ok) {
                throw new Error('Error al borrar ticket');
            }
                
            // setPendientes(prevdades => prevdades.filter(dato => dato.id !== id));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


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
                    {pendientes?.map((pendiente, index) => (
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
                            <td onClick={() => borrarTicket(pendiente.codigo)}>
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
