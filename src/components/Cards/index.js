import './cards.css'
import carteira from './src/imagem-acessorios.jpg'
import bolsa from './src/imagem-bolsa.jpg'
import bone from './src/imagem-boné.jpg'
import cMasculina from './src/imagem-carteiram.jpg'
import colar from './src/imagem-colar.jpg'
import oculos from './src/imagem-oculos.jpg'
function Cards(){
    return(
        <div className='container-cards'>
            <div className='container-1'>
                <div className="card">
                    <img src={carteira} alt='carteira' className="foto-acessorio"/>
                </div>
                <div className="card">
                    <img src={bolsa} alt='carteira' className="foto-bolsa"/>
                </div><div className="card">
                    <img src={bone} alt='carteira' className="foto-bone"/>
                </div>

            </div>

            <div className='container-2'>
                <div className="card">
                        <img src={cMasculina} alt='carteira' className="foto-carteira"/>
                </div>
                <div className="card">
                    <img src={colar} alt='carteira' className="foto-acessorio"/>
                </div>
                <div className="card">
                    <img src={oculos} alt='carteira' className="foto-acessorio"/>
                </div>
            </div>
        </div>
    )
}

export default Cards;