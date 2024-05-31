import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TablaPendientes from "../componentes/TablaPendientes";
import TablaResueltos from "../componentes/TablaResueltos";
import { useGlobalContext } from "../context/GlobalContext";

export default function Home() {
    const { pendientes, resueltos, obtenerTicketPendientes, obtenerTicketResueltos } = useGlobalContext()
    
    useEffect(() => {
        async function getTickets() {
            await obtenerTicketPendientes()
            await obtenerTicketResueltos()
        }
        
        getTickets()
    }, [])


    return (
        <div className="container mt-5">
            <h1>Administración de incidencias</h1>

            <div className="d-flex justify-content-end  ">
                <Link to="/nuevoTicket" className="text-bg-success text-decoration-none fw-bold bg-success rounded p-2">Nuevo Ticket</Link>
            </div>

            <TablaPendientes pendientes={pendientes}/>
            <TablaResueltos resueltos={resueltos}/>
        </div>
    )
}
