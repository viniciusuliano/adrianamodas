import { Link } from "react-router-dom";
import './footer.css'
import Logo from './src/logoLoja.svg'
function Footer(){
    return(
        <div className="footer">
            <div className="logo-loja">
                <img src={Logo} alt="Logo da loja Adriana Modas"/>
            </div>
            <div className="navegation">
                <Link to={'./'}>Página Inicial</Link>
                <Link to={'./acessorios'}>Acessórios</Link>
                <Link to={'./calcas'}>Calças</Link>
                <Link to={'./camisetas'}>Camisas</Link>
                <Link to={'./vestidos'}>Vestidos</Link>
                <Link to={'./calcados'}>Calçados</Link>
            </div>
        </div>
    )
}


export default Footer;