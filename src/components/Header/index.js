import { Link } from "react-router-dom";
import './header.css'
import Logo from './src/logo.svg'
import HomeLogo from './src/home.svg'
import Whatsapp from './src/whatsapp.svg'
function Header(){
    return(
    <div>
        <header>
            <div className="logo">
                <img className="logo-img" src={Logo} alt="logo loja"></img>
                <h1>Adriana Modas</h1>
            </div>
            <div className="rotas">
            <Link to={'/'}><img className="icone-home" src={HomeLogo} alt="Link home"></img></Link>
            <img src={Whatsapp} alt="Icone Whatsapp"></img>
            </div>
        </header>
            <div className="page">
                <Link to={'/acessorios'}>Acessórios</Link>
                <Link to={'/calcas'}>Calças</Link>
                <Link to={'/camisetas'}>Camisas</Link>
                <Link to={'/vestidos'}>Vestidos</Link>
                <Link to={'/calcados'}>Calçados</Link>
            </div>
    </div>
)
}

export default Header;