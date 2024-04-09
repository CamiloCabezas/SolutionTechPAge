import NavBar from "../../Components/NavBar/navbar";
import "./ContactoStyles.css"

const Contacto = () => {
    return(
        <div>
            <NavBar/>
            <h1 className="title">Contactanos</h1>

            <div className="info">
                <h3>Si deseas tener mayor informacion o contratar con nosotros para el crecimiento de tu empresa, aca hay algunas opciones</h3>

                <div className="infoInfo">

                    <div className="contacto-card">
                        <h4>Contactanos Por WhatsApp!!</h4>
                        <a href="https://api.whatsapp.com/send?phone=573212376035&text=Hola%2C%20estoy%20interesado%20en%20tu%20producto">
                            Envíame un mensaje por WhatsApp
                        </a>

                    </div>

                    <div className="contacto-card">
                        <h4>Envianos un correo!!</h4>
                        <a href="mailto:solutionTech@gmail.com">Enviar correo electrónico</a>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Contacto;