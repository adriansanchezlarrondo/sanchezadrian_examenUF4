import { useGlobalContext } from "../context/GlobalContext";

export default function TablaResueltos({ resueltos }) {
    const { setResueltos, obtenerTicketResueltos } = useGlobalContext()

    async function borrarTicket(id) {
        console.log('codigo/id', id);

        try {
            const response = await fetch(`https://json-server-examen-uf-4.vercel.app/ticketsResueltos/${id}`, { method: 'DELETE' })//.then(res => res.json())

            if (!response.ok) {
                throw new Error('Error al borrar ticket');
            }
                
            setResueltos(prevdades => prevdades.filter(dato => dato.id !== id));
            await obtenerTicketResueltos()
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


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
                    {resueltos?.map((resuelto, index) => (
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
                            <td onClick={() => borrarTicket(resuelto.codigo)}>
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
