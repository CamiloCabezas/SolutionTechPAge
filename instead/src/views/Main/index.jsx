import "./indexStyles.css"
import "../../Components/NavBar/navbar"
import NavBar from "../../Components/NavBar/navbar";


function Index ()  {

    return (
      <div>
        <NavBar/>
        <div><h1 className="title">Solution Tech</h1></div>

        <div className="container">
          <div className="slogan">
            <h3 >Invierte en tecnologia, el impulso definitivo para tu negocio</h3>
          </div>

          <div className="imagen-slogan" >
            
            <img src="https://image.slidesdocs.com/responsive-images/background/illustrating-data-technological-advancements-in-science-through-information-graphics-powerpoint-background_920d0930d6__960_540.jpg" alt="Imagen de Graficas"/>
          </div>
        </div>
        <div className="container-pilars">
          <div className="pilars">
            <h3>Diseño atractivo y funcional</h3>
            <p>En nuestros proyectos es muy que el diseño vaya con la esencia de nuestros clientes, ademas de asegurar una funcionalidad escalable y sin fallas</p>
          </div>
          <div className="pilars">
            <h3>Contenido de alta calidad</h3>
            <p>EL desarrollo de nuestras paginas web siempre llevara una alta calidad no solo en la informacion y funcionalidad si no tambien las mejores resoluciones </p>
          </div>
          <div className="pilars">
            <h3>Optimización para dispositivos móviles</h3>
            <p>Nuestro enfoque en la optimización para dispositivos móviles garantiza que tu sitio web se vea y funcione perfectamente en cualquier pantalla, desde teléfonos inteligentes hasta tabletas.</p>
          </div>

          <div className="pilars">
            <h3>Velocidad de carga rápida</h3>
            <p>La velocidad de carga rápida es esencial para la retención de usuarios. Nos aseguramos de que tu sitio web cargue de manera rápida y eficiente, brindando una experiencia óptima para tus visitantes.</p>
          </div>

          <div className="pilars">
            <h3>Seguridad</h3>
            <p>La seguridad de tu sitio web es nuestra prioridad. Implementamos las últimas medidas de seguridad para proteger tus datos y la información de tus usuarios, garantizando una experiencia segura en línea.</p>
          </div>

          <div className="pilars">
            <h3>Interactividad y personalización</h3>
            <p>Nos esforzamos por crear experiencias web interactivas y personalizadas que involucren a tus usuarios y los mantengan comprometidos. Desde formularios de contacto hasta funciones de comentarios, creamos sitios que se adaptan a las necesidades de tus usuarios.</p>
          </div>

          <div className="pilars">
            <h3>Integración con redes sociales</h3>
            <p>Facilitamos la conexión de tu sitio web con las plataformas de redes sociales más populares. Desde botones de compartir hasta integración de feeds, ayudamos a amplificar tu presencia en línea y a interactuar con tu audiencia en diversas plataformas.</p>
          </div>

          <div className="pilars">
            <h3>Fiabilidad y disponibilidad</h3>
            <p>Nuestros servicios garantizan la fiabilidad y disponibilidad de tu sitio web las 24 horas del día, los 7 días de la semana. Con soluciones de alojamiento confiables y monitoreo constante, tu sitio estará siempre en línea y listo para satisfacer las necesidades de tus usuarios.</p>
          </div>
        </div>
        

      </div>
      );
}

export default Index; 