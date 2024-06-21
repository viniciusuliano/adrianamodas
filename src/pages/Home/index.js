import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import Image1 from './src/imagem1.jpg'
import Image2 from './src/imagem2.jpg'
import Image3 from './src/imagem3.jpg'
import Image4 from './src/imagem4.jpg'
import Image5 from './src/imagem5.jpg'


function Home(){
    const data = [
        {id: '1', image: Image1},
        {id: '2', image: Image2 },
        {id:'3', image: Image3},
        {id:'4', image: Image4},
        {id:'5', image: Image5},

    ]

    return(
        <div className='conteudo'>
            <div className='title'>
                <h1>Adriana Modas</h1>
                <span>Venha fazer a sua propria moda!</span>
            </div>
                    <div className='container-slider'>
                 <Swiper slidesPerView={1}
                 modules={[EffectFade]}
                effect='fade'
                pagination={{clickable: true}}
                navigation
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt='slider'
                        className='slide-item'
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
        </div>
    )
}

export default Home;