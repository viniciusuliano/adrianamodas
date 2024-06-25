import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Acessorios from './pages/Acessorios'
import Calcados from './pages/Calçados'
import Calcas from './pages/Calças'
import Camisetas from './pages/Camisetas'
import Vestidos from './pages/Vestidos'
import Erro from './pages/Erro'
function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/acessorios' element={<Acessorios/>}/>
                <Route path='/calcados' element={<Calcados/>}/>
                <Route path='/calcas' element={<Calcas/>}/>
                <Route path='/camisetas' element={<Camisetas/>}/>
                <Route path='/vestidos' element={<Vestidos/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;