import { Link } from "react-router-dom";
import './header.css'
import Logo from './src/logo.svg'
import HomeLogo from './src/home.svg'
import Whatsapp from './src/whatsapp.svg'
import iconAcessorio from './src/acessorios.svg'
import iconCalca from './src/calca.svg'
import iconCamisa from './src/camisa.svg'
import iconVestidos from './src/vestidos.svg'
import iconCalcados from './src/calcados.svg'
import iconInstagram from './src/instagram.svg'
function Header(){
    return(
    <div className="component">
        <header>
            <div className="logo">
                <img className="logo-img" src={Logo} alt="logo loja"></img>
                <h1>Adriana Modas</h1>
            </div>
            <div className="rotas">
            <Link to={'/'}><img className="icone-home" src={HomeLogo} alt="Link home"></img></Link>
            <Link target="blank" to={'https://wa.me/5547984839562?text=Ol%C3%A1%2C+tudo+bem.+Gostaria+de+atendimento%21'}><img src={Whatsapp} alt="Icone Whatsapp"></img></Link>
            <Link target="blank" to={'https://www.instagram.com/_modas_adriana?igsh=ZXJvemt1aG5xM2F0'}><img className="iconinstagram" src={iconInstagram} alt="icone instagram"></img></Link>
            <div className="funcionamento">
            <p>SEG-SEX: 9:00-19:00</p>
            <p>SAB: 9:00-13:00</p>
            </div>

            </div>
        </header>
            <div className="page">
                <div className="container">
                    <div className="acessorios">                
                        <img src={iconAcessorio} alt="icon-acessorio"></img>
                        <Link to={'/acessorios'}>Acessórios</Link>
                    </div>
                    <div className="calca">
                        <img src={iconCalca} alt="icon-calca"></img>
                        <Link to={'/calcas'}>Calças</Link>
                    </div>
                    <div className="camisa">
                        <img src={iconCamisa} alt="icon-camisa"></img>
                        <Link to={'/camisetas'}>Camisas</Link>
                    </div>
                    <div className="vestidos">
                        <img src={iconVestidos} alt="icon-vestidos"></img>
                        <Link to={'/vestidos'}>Vestidos</Link>
                    </div>
                    <div className="calcados">
                        <img src={iconCalcados} alt="icon-calcados"></img>
                        <Link to={'/calcados'}>Calçados</Link>
                    </div>
                </div>
            </div>
    </div>
)
}

export default Header;