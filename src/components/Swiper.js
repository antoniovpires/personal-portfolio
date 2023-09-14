function SwiperProject(props) {
    let alts = props.language === "br" ? ["logo da empresa onix, em formato de O, seguido do nome Onix", "nome da empresa compass.uol estilizado", "Logo da escola, literalmente KNN escritos.", "Nome Banzai, com um raio estilizado e ao fundo"] : ["onix's logo, in a 'O' format, followed by Onix's styled name", "compass.uol's styled name", "school logo, literaly the letters KNN written.", "Banzai written, with a styled lightning at the back"]

    let descriptions = props.language === "br" ? ["Experiência como Desenvolvedor Web, realizando manutenções no sistema e implementando novas funcionalidades", "Estágio em AWS Cloud Engineering. Estudo as principais tecnologias do mercado de Data Analytics e participo de projetos digitais.", "Fui instrutor de inglês por 1 ano, desenvolvendo minhas habilidades de comunicação e didática", "eCommerce fundado por mim, direcionado ao mercado de roupas pet"] : ["Experience as a Web Developer, performing system maintenance and implementing new features", "Internship in AWS Cloud Engineering. Studying the leading technologies in the Data Analytics market and participating in digital projects.", "I was an English instructor for 1 year, developing my communication and teaching skills", "eCommerce founded by me, focused on the pet clothing market"]

    return (
        <swiper-container className="swiper-container">
            <swiper-slide>
                <div>
                <img alt={alts[0]} data-bs-toggle="popover" data-bs-trigger="hover focus" title="Onix" data-bs-content={descriptions[0]} data-bs-placement="bottom" src={require('../project-pictures/logo2.png')}></img>
                </div>
                <img alt={alts[1]} data-bs-toggle="popover" data-bs-trigger="hover focus" title="Compasso.UOL" data-bs-content={descriptions[1]} data-bs-placement="bottom" src={require('../project-pictures/LogoCompasso-positivo.png')}></img>
                <img alt={alts[2]} data-bs-toggle="popover" data-bs-trigger="hover focus" title="KNN Idiomas" data-bs-content={descriptions[2]} data-bs-placement="bottom" style={{ width: "45%" }} src={require('../project-pictures/knn-logo-1.png')}></img>
                <img alt={alts[3]} data-bs-toggle="popover" data-bs-trigger="hover focus" title="Banzai Store" data-bs-content={descriptions[3]} data-bs-placement="bottom" style={{ width: "45%" }} src={require('../project-pictures/Banzai_LOGO-removebg-preview.png')}></img>
            </swiper-slide>
        </swiper-container>
    )
}


export default SwiperProject

