import './home.css'
import { Swiper, SwiperSlide, autoplay} from 'swiper/react';
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
        <section>
            <div className='conteudo'>
                 <Swiper slidesPerView={3}
                direction='horizontal'
                loop = 'true'
                autoplay = {{
                    delay: 1500,
                    disableOnInteraction: false,
                }}>
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
        <div className='location'>
            <h1>A Adriana Modas trabalha com diversos modelos e tamanhos de roupa!</h1>
            <p>Venha conhecer a nossa loja na Rua Bento Torquato da Rocha, 622 - Vila Nova</p>
            <iframe className='maps'  title='Google Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.032097143611!2d-48.902933088165646!3d-26.293059467504545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea5362888a071%3A0xe7bde94ef7de9732!2sAdriana%20Modas!5e0!3m2!1spt-BR!2sbr!4v1719244389018!5m2!1spt-BR!2sbr" width="800" height="600"  style={{ border: 0, borderRadius: '15px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </section>

)
}

export default Home;