function SwiperProject(props) {
    

    return (
        <swiper-container className="swiper-container">
            <swiper-slide>
                <img data-bs-toggle="popover" data-bs-trigger="hover focus" title="Onix" data-bs-content="Experiência como Desenvolvedor Web, realizando manutenções no sistema e implementando novas funcionalidades" data-bs-placement="bottom" src={require('./project-pictures/logo2.png')}></img>
                <img data-bs-toggle="popover" data-bs-trigger="hover focus" title="Compasso.UOL" data-bs-content="Estágio em AWS Cloud Engineering" data-bs-placement="bottom" src={require('./project-pictures/LogoCompasso-positivo.png')}></img>
                <img data-bs-toggle="popover" data-bs-trigger="hover focus" title="Compasso.UOL" data-bs-content="Fui instrutor de inglês por 1 ano, desenvolvendo minhas habilidades de comunicação e didática" data-bs-placement="bottom" style={{width: "45%"}} src={require('./project-pictures/knn-logo-1.png')}></img>
                <img data-bs-toggle="popover" data-bs-trigger="hover focus" title="Banzai Store" data-bs-content="eCommerce fundado por mim, direcionado ao mercado de roupas pet" data-bs-placement="bottom" style={{width: "45%"}} src={require('./project-pictures/Banzai_LOGO-removebg-preview.png')}></img>
            </swiper-slide>
            <swiper-slide>
                <img src={require('./project-pictures/logo2.png')}></img>
                <img src={require('./project-pictures/LogoCompasso-positivo.png')}></img>
                <img style={{width: "45%"}} src={require('./project-pictures/knn-logo-1.png')}></img>
                <img  style={{width: "45%"}} src={require('./project-pictures/Banzai_LOGO-removebg-preview.png')}></img>
            </swiper-slide>
        </swiper-container>
    )
}


export default SwiperProject

