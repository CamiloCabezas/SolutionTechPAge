import "./servicesStyles.css"
import  NavBar from "../../Components/NavBar/navbar"
import { Link } from "react-router-dom";


const Services = () => {
    return (
        <div>
            <NavBar/>
            <h1 className="title">
                Servicios
            </h1>

            <div className="speech-services" >
                <h3>Para nosotros es muy importante tu satisfaccion y tranquilidad, por eso aqui tienes todos nuestros pilares, pero debes tener en cuenta que siempre nos adaptaremos a tus necesidades y gustos</h3>
            </div>

            <div className="container-servicios" id="servicios">
          <div className="card-servicio">
            <h3 className="name-servicio">-Paquete Basico</h3>
            <div className="inside">
              <div className="caracteristicas">
                  <ul>
                    <li>Pagina Inicial (Landing Page)</li>
                    <li>Pagina de Contactos</li>
                    <li>Integracion Con Redes Sociales</li>
                    <li>Formulario De Contacto</li>
                  </ul>
              </div>

              <div className="boton">
                <Link to="/Contacto"><button>Saber más</button></Link>
              </div>

            </div>
          </div>

          <div className="card-servicio">
            
            <h3 className="name-servicio">-Paquete Tienda En Linea</h3>
            <div className="inside">
              <div className="caracteristicas">
                    <ul>
                      <li>Ecommerce</li>
                      <li>Pasarela de Pago</li>
                      <li>Carrito de Compras</li>
                      <li>Dashboard Admin</li>
                    </ul>
                </div>
                <div className="boton">
                  <Link to="/Contacto"><button>Saber más</button></Link>
                </div>
            </div>
          </div>

          <div className="card-servicio">
            
            <h3 className="name-servicio">-Paquete Coorporativo</h3>
            <div className="inside">
              <div className="caracteristicas">
                  <ul>
                    <li>Blog De informacion</li>
                    <li>Contactos</li>
                    <li>Inventario </li>
                    <li>Dashboard Admin</li>
                  </ul>
              </div>
              <div className="boton" >
                <Link to="/Contacto"><button>Saber más</button></Link>
              </div>
            </div>
          </div>

          <div className="card-servicio">
            
            <h3 className="name-servicio">-Paquete Hoteleria</h3>
            <div className="inside">
              <div className="caracteristicas">
                  <ul>
                    <li>Sistema de Reserva</li>
                    <li>Control de Habitaciones</li>
                    <li>Calendario y Agendamiento</li>
                    <li>Dashboard Admin</li>
                    <li>Confirmacion al correo</li>
                  </ul>
              </div >
              <div className="boton">
                <Link to="/Contacto"><button>Saber más</button></Link>

              </div>
            </div>

          </div>
        </div>
        </div>

        
    )
}

export default Services;