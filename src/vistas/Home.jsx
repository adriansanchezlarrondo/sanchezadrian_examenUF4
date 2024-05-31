import TablaPendientes from "../componentes/TablaPendientes";
import TablaResueltos from "../componentes/TablaResueltos";

export default function Home() {

    return (
        <div className="container mt-5">
            <h1>Administración de incidencias</h1>

            <TablaPendientes />            
            <TablaResueltos />            
        </div>
    )
}
