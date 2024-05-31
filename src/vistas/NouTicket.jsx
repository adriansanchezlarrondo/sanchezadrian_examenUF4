import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

export default function Home() {
    const { setPendientes, obtenerTicketPendientes } = useGlobalContext()

    const navigate = useNavigate()

    const [ codigo, setCodigo ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ aula, setAula ] = useState('')
    const [ grupo, setGrupo ] = useState('')
    const [ pc, setPc ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ alumno, setAlumno ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const ticket = {
            "codigo": codigo,
            "fecha": fecha,
            "aula": aula,
            "grupo": grupo,
            "pc": pc,
            "descripcion": descripcion,
            "alumno": alumno,
        }

        const anadirTicket = async ()  =>{
            try {
                const response = await fetch(`https://json-server-examen-uf-4.vercel.app/ticketsPendientes`, { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(ticket)
                });
                
                if (response.ok) {
                    const data = await response.json();
                    setPendientes(prevdades => [...prevdades, data]);
                    console.log('Dato añadida:', data);
                    await obtenerTicketPendientes()
                } else {
                    console.error('Error al añadir ticket');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        await anadirTicket()
        navigate('/')
    }    

    return (
        <div className="container mt-5">
            <h1 className="text-center pb-2">Nuevo ticket</h1>

            <div className="d-flex justify-content-center">
                <form onSubmit={(e) => handleSubmit(e)} action="" className="shadow p-4 rounded" style={{width: '500px'}}>
                    <label htmlFor="codigo" className="form-label pt-3">Código</label>
                    <input required onChange={(e) => setCodigo(e.target.value)} type="text" className="form-control" name="codigo" id="codigo" placeholder="Código"/>

                    <label htmlFor="fecha" className="form-label pt-3">Fecha</label>
                    <input required onChange={(e) => setFecha(e.target.value)} type="date" className="form-control" name="fecha" id="fecha" placeholder="Fecha"/>
                    
                    <label htmlFor="aula" className="form-label pt-3">Aula</label>
                    <input required onChange={(e) => setAula(e.target.value)} type="text" className="form-control" name="aula" id="aula" placeholder="Aula"/>
                    
                    <label htmlFor="grupo" className="form-label pt-3">Grupo</label>
                    <input required onChange={(e) => setGrupo(e.target.value)} type="text" className="form-control" name="grupo" id="grupo" placeholder="Grupo"/>
                    
                    <label htmlFor="pc" className="form-label pt-3">Ordenador</label>
                    <input required onChange={(e) => setPc(e.target.value)} type="text" className="form-control" name="pc" id="pc" placeholder="Ordenador"/>
                    
                    <label htmlFor="descripcion" className="form-label pt-3">Descripción</label>
                    <input required onChange={(e) => setDescripcion(e.target.value)} type="text" className="form-control" name="descripcion" id="descripcion" placeholder="Descripción"/>
                    
                    <label htmlFor="alumno" className="form-label pt-3">Alumno</label>
                    <input required onChange={(e) => setAlumno(e.target.value)} type="text" className="form-control" name="alumno" id="alumno" placeholder="Alumno"/>

                    <div className="d-flex justify-content-end">
                        <input className="bg-primary text-bg-primary fw-bold p-2 border-0 rounded m-3" type="submit" value="Añadir"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
