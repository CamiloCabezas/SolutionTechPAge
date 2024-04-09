import { data } from "../home/data"
import "./ProyectoStyles.css"
import NavBar from "../../Components/NavBar/navbar"

const Proyectos = () => {
    return(
        <div>
            <NavBar/>
            <h1 className="title">
                Proyectos Realizados
            </h1>

            <div className="container-proyectos">

                {
                    data.map((info) => {
                        if(info.id > 1){
                            return  <div key={info.id} className="proyecto">
                            <div className="titleh3"><h3>{info.title}</h3></div>
                            <img src={info.imgURL} width={400} height={350}/>
                            <div className="titless"><p>{info.description}</p></div>
                        </div>
                        }
                    })
                }

            </div>

        </div>
    )
}


export default Proyectos