import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import '../components/css/Home.css'
import logo from '../img/logo.png'

export const Navbar = () => {


  const {state} = useLocation()
  const navigate = useNavigate()
  
  const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

  return (
    <>
    <header >


          {
            
            state?.logged ? (
              <div>
      <div className="contenido-navegacion">
        <div className="logo">
        <img src={logo} alt="logo" />
          <h2>GreenBox <br /><span>Te conecta con el campo</span></h2>
          
        </div>
        <div className="navegacion">
          <nav>
            <Link to="/perfil">Perfil</Link>
            <Link to="/ayuda">Ayuda</Link>
            <span className='username'>{state?.name}</span>
                <button className='btn-logout' onClick={onLogout}>
                  Cerrar sesión
                </button>
          </nav>
        
        </div>

      </div>
              </div>
            ):(
              <div>
              <div className="contenido-navegacion">
                <div className="logo">
                <img src={logo} alt="logo" />
                  <h2>GreenBox <br /><span>Te conecta con el campo</span></h2>
                  
                </div>
                <div className="navegacion">
                    <nav>
            <Link to='/home'>home</Link>
            <Link to='/login'>Iniciar Seccion</Link>
            <Link to='/registro'>Registrarse</Link>
        </nav>
         
        </div>

      </div>
              </div>
            )
          }


    </header>
    <Outlet />
    </>
  )
}
