
import perfil from '../img/foto de perfil.webp'
import logo from '../img/logo.png'
import '../components/css/Perfil.css'
import { Link } from 'react-router-dom'

export const Perfil = () => {
    return (
        <>
            <div className="contenido-navegacion">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h2>GreenBox <br /><span>Te conecta con el campo</span></h2>

                </div>
                <div className="navegacion">
                    <nav>
                        <Link to="/categorias">Categorias</Link>
                        <Link to="/ayuda">Ayuda</Link>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="columna-1">
                    <h1>Tu informacion personal</h1>
                    <img src={perfil} alt="perfil" />
                    <div class="columna">
                        <button>Cambiar foto</button>
                    </div>
                    <p>Nombres</p>

                    <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        autoComplete='off'
                        placeholder='Nombres '
                    />
                    <label htmlFor='name'></label>

                    <p>Apellidos</p>

                    <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        autoComplete='off'
                        placeholder='Apellidos'
                    />
                    <label htmlFor='name'></label>

                    <p>Tipo de Documento</p>
                    <select
                        name="documentType"
                        id="documentType"
                        required
                    >
                        <option value="dni">Cedula de Ciudania</option>
                        <option value="passport">Pasaporte</option>
                        <option value="license">Documento Extranjero</option>
                    </select>

                    <p>Numero</p>

                    <input
                        type='int'
                        name='name'
                        id='int'
                        required
                        autoComplete='off'
                        placeholder='Numero de Documento '
                    />
                    <label htmlFor='Numero de Documento'></label>

                    <p>Fecha de nacimiento</p>

                    <input
                        type='date'
                        name='name'
                        id='date'
                        required
                        autoComplete='off'
                        placeholder='Fecha de nacimiento '
                    />
                    <label htmlFor='date'></label>

                    <p>Genero</p>

                    <select
                        name="documentType"
                        id="documentType"
                        required
                    >
                        <option value="dni">Masculino</option>
                        <option value="passport">Femenino</option>
                        <option value="license">Otro</option>
                    </select>

                </div>
                <div class="columna-2">
                    <div class="log1">
                        <img src={logo} alt="logo" />
                        <h2>GreenBox 2</h2>
                    </div>

                    <p>Estado civil</p>

                    <select
                        name="documentType"
                        id="documentType"
                        required
                    >
                        <option value="dni">Soltero</option>
                        <option value="passport">Casado</option>
                        <option value="license">Union Libre</option>
                        <option value="license">Viudo</option>
                    </select>
                    <p>Pais</p>
                    <input
                        type='text'
                        name='country'
                        id='country'
                        required
                        autoComplete='off'
                        placeholder='Pais'
                    />
                    <label htmlFor='country'></label>

                    <p>Ciudad</p>
                    <input
                        type='text'
                        name='city'
                        id='city'
                        required
                        autoComplete='off'
                        placeholder='Ciudad'
                    />
                    <label htmlFor='city'></label>

                    <p>Direccion</p>
                    <input
                        type='text'
                        name='address'
                        id='address'
                        required
                        autoComplete='off'
                        placeholder='Direccion'
                    />
                    <label htmlFor='address'></label>

                    <p>Telefono</p>
                    <input
                        type='tel'
                        name='phone'
                        id='phone'
                        required
                        autoComplete='off'
                        placeholder='Telefono'
                    />
                    <label htmlFor='phone'></label>
                    <div className='columna2'><button>Guardar</button></div>

                </div>

            </div>

        </>
    )
}
