import { Link } from "react-router-dom"
import logo from '../img/logo.png'
import '../components/css/Home.css'
import { useEffect } from 'react'
import imagen1 from '../img/frutas/Fresas/imagen1.jpeg'
import imagen2 from '../img/Cereales/Avena/image1.jpeg'
import imagen3 from '../img/Vegetales/Tomate/image1.jpeg'
import { Productos } from "./Productos"
import { Lugares } from "./Lugares"


export const Home = () => {
    useEffect(() => {
        const parallaxContainer = document.getElementById('parallax-container')

        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            parallaxContainer.style.backgroundPositionY = `calc(50% + ${scrollY * 0.15
                }px)`
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <>
    <header className="encabezado" id='parallax-container'>
      <div className="contenido-navegacion">
        <div className="logo">
        <img src={logo} alt="logo" />
          <h2>GreenBox <br /><span>Te conecta con el campo</span></h2>
          
        </div>
        <div className="navegacion">
          <nav>
          <a href="#productos">Productos</a>
          <a href="#lugares">Lugares</a>
            <Link to="/login">Iniciar Sesion</Link>
            <Link to="/registro">Registro</Link>
          </nav>
        </div>
      </div>
      <div class="contenido-encabezado contenedor">
        <div class="texto-encabezado">
          <h1>
            Reparto de diferentes productos <br />
            agricolas cultivados en tu localidad
          </h1>
        </div>
      </div>
    </header>
     <div className='hacemos'>
     <h2>Que hacemos</h2>
     <div className='contenido-hacemos contenedor'>
         <div className='conectamos'>
             <img src={imagen1} alt='imagen1' />
             <p>
                 Conectamos consumidores y próductores directamente logrando
                 mayor calidad y ahorro
             </p>
         </div>
         <div className='conectamos'>
             <img src={imagen2} alt='imagen2' />
             <p>
                 cuidamos el medioambiente, nos enfocamos en los mercados locales
                 evitando los costos económicos y medioambientales del transporte
             </p>
         </div>
         <div className='conectamos'>
             <img src={imagen3} alt='imagen3' />
             <p>
                 Creemos que la buena voluntad de las personas puede cambiar el
                 mundo. Únete a nosotros haz parte de la revolución verde
             </p>
         </div>
     </div>
     <Productos />
     <Lugares />
 </div>
 </>
  )
}
