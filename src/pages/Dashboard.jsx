import { Link } from "react-router-dom"
import '../components/css/Dashboard.css'

export const Dashboard = () => {
  return (
    <>
    <div className="categorias">

            <h1>Categorias Disponibles</h1>

        <div class="botones-categorias">
        <Link to="/frutas"><button>Frutas</button></Link>
        <Link to="/vegetales"><button>Vegetales</button></Link>
        <Link to="/cereales"><button>Cereales</button></Link>
        </div>
        <div class="botones-categorias">
        <Link to="/legumbres"><button>Legumbres</button></Link>
        <Link to="/especias"><button>Especias</button></Link>
        </div>
        </div>
    </>
  )
}
