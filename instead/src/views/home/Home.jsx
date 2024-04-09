import { useEffect, useRef, useState } from "react";
import "./HomeStyles.css"
import{data} from  "./data"
import { Link } from "react-router-dom";

function Home () {

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

        if(imgNode) {
            imgNode.scrollIntoView({
                behavior:"smooth"
            });
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if(direction === 'prev'){
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0: curr - 1;
            })
        }else{
            setCurrentIndex(curr => {
                const isLastSlide = currentIndex === data.length-1;
                return isLastSlide ? data.length-1 : curr + 1;
            })
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return(
        <div className="all">
            <div className="body-a">
            <div className="title-container">
                <div className="respon-title">
                    <h1 className="titles">Bienvenido a Solution Tech</h1>
                </div>
                <div className="response-p">
                    <p>¿Estas en busqueda de mejoras para tu empresa? Solution Tech es tu solucion</p>
                </div>
            </div>

       

            
            <div className="main-conteiner">
                <div className="slider-conteiner">
                    <div onClick={() =>scrollToImage('prev')} className="leftArrow">&#10092;</div>
                    <div onClick={() =>scrollToImage('next')} className="rightArrow">&#10093;</div>
                    <div className="container-images">
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgURL} width={800} height={500}/>
                                    </li> 
                                      
                                })
                            }
                        </ul>
                    </div>
                    <div className="dots-container">
                            {
                                data.map((_,idx) => (
                                    <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}` }
                                        onClick={() => goToSlide(idx)}>
                                        &#9865;
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
            <div className="hola"></div>
                <div className="btn">
                        <Link to={"/home"} className="my-button">Ingresar</Link>
                </div>
            </div>



        </div>
    )
}

export default Home;