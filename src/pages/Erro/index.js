import './index.css'
import {Link} from 'react-router-dom'
function Erro(){
    return(
        <div className='erro'>
            <h1>404 NOT FOUND</h1>
            <Link to={'/'}>Retorne a Página principal</Link>        </div>
    )
}

export default Erro;