import ProjectDescription from './ProjectDescription';
import TextDiv from './textDiv';
import SkillDiv from './skillDiv';
import Swiper from './Swiper';
import React from 'react';


// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
//   for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//       } else {
//       reveals[i].classList.remove("active");
//       }
//   }
// }

// window.onload = () => {
//   document.getElementById("projectsView").addEventListener("scroll", reveal);  
//   reveal();
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'eng', // Default language is Portuguese
            projectDescriptionText1: "Tenho experiência no eCommerce e já trabalhei em projetos relacionados ao ramo. Nesse projeto, fiz um sistema para cadastro, atualização e exclusão de produtos registrados em uma loja fictícia. Um clássico CRUD, utilizando NoSQL com o ORM Prisma.",
            projectTitleText1: "Cadastro de Produtos para eCommerce",
            projectDescriptionText2: "Tenho experiência no eCommerce e já trabalhei em projetos relacionados ao ramo. Nesse projeto, fiz um sistema para cadastro, atualização e exclusão de produtos registrados em uma loja fictícia. Um clássico CRUD, utilizando NoSQL com o ORM Prisma.",
            projectTitleText2: "Cadastro de Produtos para eCommerce",
            aboutMeTitle: "Sobre mim",
            aboutMeText: "Tenho a ambição de impactar o mundo positivamente através da tecnologia. Gosto de trabalhar em projetos <b>inovadores</b> e adoraria fazer parte de trabalhos voluntários que envolvam programação. Me dou muito bem com <b>trabalho em equipe</b> e tenho facilidade para me comunicar com pessoas (incluindo públicos maiores), <b>tanto em Português quanto em Inglês</b>. Sou autodidata, sei me <b>autogerenciar</b>, estou sempre atrás de novos conhecimentos e buscando aprimorar as minhas habilidades."
        };
    }

    handleTranslation = () => {
        this.setState((prevState) => ({
            language: prevState.language === 'br' ? 'eng' : 'br'
        }), () => {
            this.renderTableRows()
        });

    };

    renderTableRows = () => {
        const { language } = this.state;
        if (!language) return null;

        document.getElementById("profileDescription").innerHTML = language === "br" ? 'Graduando em <span class="highlight">Análise e Desenvolvimento de Sistemas</span>' : 'Undergraduate in <span class="highlight">Systems Analysis and Development</span>';

        document.getElementById("lngButton-eng").innerHTML = language === "br" ? '&#127482;&#127480;' : '&#127463;&#127479;';

        document.getElementById("swiperTitle").innerHTML = language === "br" ? 'Empresas que já confiaram no meu trabalho' : 'Companies that I have worked in';

        document.getElementById("about-me-div").innerHTML = language === "br" ? `<h2>Minha experiência</h2>
          <p>No último ano e meio tenho me dedicado ao estudo da programação, aprimorando constantemente minhas habilidades e ampliando meu conhecimento. Durante esse período, tive a oportunidade de trabalhar como desenvolvedor web em tempo integral por 11 meses, adquirindo uma valiosa experiência prática na área. Além das minhas atividades profissionais, participei ativamente de projetos paralelos, o que enriqueceu ainda mais minha expertise e alimentou minha paixão por criar soluções inovadoras.</p>` : `<h2>My experience</h2>
          <p>I have dedicated the past year and a half to immersing myself in the world of programming, constantly honing my skills and expanding my knowledge. During this time, I have had the privilege of working as a full-time web developer for 11 months, gaining valuable hands-on experience in the industry. In addition to my professional endeavors, I have actively participated in various side projects, which have further enriched my expertise and fueled my passion for creating innovative solutions.</p>`;


        const projectTitleText1 = "EZ Youtube Video Downloader";
        const projectDescriptionText1 = language === "br" ? "Criei esse aplicativo desktop com o objetivo de ter um jeito fácil e rápido de baixar conteúdo do Youtube. Utilizei Python, PyTube e Tkinter para o app, para transformá-lo em um executável, utilizei pyinstaller." : "I have made this desktop app with the objetctive of having a fast and easy way to download youtube content. I used Python, PyTube and Tkinter for the app, and to transform it into an executable I used pyinstaller";
        
        const projectTitleText2 = language === "br" ? "Página para empresa fictícia" : "Made-up Company Web Page";
        const projectDescriptionText2 = language === "br" ? "Esse é um dos projetos que possuo para páginas webs, servem para praticar código e noções de UX e UI. Me divirto bastante com esse tipo de site, consigo treinar várias habilidades." : "This is one of the projects I have for web pages, they are good to practice coding and bot UX and UI notions. I have a lot of fun with this kind of website, since I can practice different skills";
        

        const aboutMeTitle = language === "br" ? "Sobre mim" : "About me";
        const aboutMeText = language === "br" ? "Tenho a ambição de impactar o mundo positivamente através da tecnologia. Gosto de trabalhar em projetos inovadores e adoraria fazer parte de trabalhos voluntários que envolvam programação. Me dou muito bem com trabalho em equipe e tenho facilidade para me comunicar com pessoas (incluindo públicos maiores), tanto em Português quanto em Inglês. Sou autodidata, sei me autogerenciar, estou sempre atrás de novos conhecimentos e buscando aprimorar as minhas habilidades." : "I have the ambition to positively impact the world through technology. I enjoy working on innovative projects and would love to be part of volunteer work involving programming. I excel in teamwork and have a knack for effectively communicating with people, including larger audiences, both in Portuguese and English. I am self-taught, capable of self-management, and always seeking new knowledge to improve my skills."

        this.setState({ projectDescriptionText1 });
        this.setState({ projectTitleText1 });
        this.setState({ projectDescriptionText2 });
        this.setState({ projectTitleText2 });
        this.setState({ aboutMeText });
        this.setState({ aboutMeTitle });
    };


    componentDidMount() {
        this.renderTableRows();
    }

    render() {
        const { projectDescriptionText1 } = this.state;
        const { projectTitleText1 } = this.state;
        const { projectDescriptionText2 } = this.state;
        const { projectTitleText2 } = this.state;
        const { aboutMeTitle } = this.state;
        const { aboutMeText } = this.state;
        const { language } = this.state;

        return (
            <div className="App">
                <aside>
                    <img id="profilePicture" src={require('./project-pictures/foto_perfil.png')} alt="Man detailed in pixels"></img>
                    <h3 id="profileTitle">Antônio V. Pires</h3>
                    <p id="profileSubtitle">Web Developer</p>
                    <p id="profileDescription">

                    </p>
                    <div id="mediaLinks">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antoniovpires/" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/antoniovpires/" title="Github"><i className="fa-brands fa-github"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://wa.me/5548999940355" title="Whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <p className="contactInfo">
                        <ion-icon name="mail-outline" role="img" class="md hydrated" aria-label="mail outline"></ion-icon>
                        <a href="mailto:antoniovpiresnt@gmail.com?subject=Oportunidade&body=Hello! Can we talk?">antoniovpiresnt@gmail.com</a>
                    </p>
                    <button id="lngButton-eng" onClick={this.handleTranslation}>
                    </button>
                </aside>
                <main id="projectsView">
                    <section id="about-me-div" className="aboutDiv fade-bottom">

                    </section>
                    <section className="companiesDiv fade-bottom">
                        <small id="swiperTitle"></small>
                        <Swiper language={language} />
                    </section>
                    <section id="projeto1" className="projectDiv project1 fade-right">
                        <ProjectDescription title={projectTitleText1} text={projectDescriptionText1} />
                    </section>
                    <section id="projeto2" className="projectDiv project2 fade-left">
                        <a href="https://antoniovpires.github.io/insta_help/" target="_blank">
                            <ProjectDescription title={projectTitleText2} text={projectDescriptionText2} />
                        </a>
                    </section>
                    <TextDiv title={aboutMeTitle} text={aboutMeText} />
                    <section className="aboutDiv fade-right">
                        <h2>Skills</h2>
                        <div id="skillsGrid">
                            <SkillDiv title="Front-End" icons={[{ class: 'devicon-html5-plain colored', name: 'HTML5' }, { class: 'devicon-css3-plain colored', name: 'CSS3' }, { class: 'devicon-javascript-plain colored', name: 'JavaScript' }]} />
                            <SkillDiv title="Frameworks/Libraries" icons={[{ class: 'devicon-react-original colored', name: 'ReactJS' }, { class: 'devicon-jquery-plain-wordmark colored', name: 'jQuery' }, { class: 'devicon-express-original colored', name: 'ExpressJS' }, { class: 'devicon-bootstrap-plain colored', name: 'Bootstrap' }]} />
                            <SkillDiv title="Back-End" icons={[{ class: 'devicon-nodejs-plain colored', name: 'NodeJs' }, { class: 'devicon-python-plain colored', name: 'Python' }, { class: 'devicon-php-plain colored', name: 'PHP' }]} />
                            <SkillDiv title="Databases" icons={[{ class: 'devicon-mysql-plain-wordmark colored', name: 'MySql' }]} />
                            <SkillDiv title="Tools" icons={[{ class: 'devicon-linux-plain colored', name: 'Linux' }, { class: 'devicon-git-plain colored', name: 'Git' }, { class: 'devicon-github-original colored', name: 'GitHub' }, { class: 'devicon-jira-plain colored', name: 'Jira' }, { class: 'devicon-debian-plain colored', name: 'Debian' }, { class: 'devicon-docker-plain colored', name: 'Docker' }, { class: 'devicon-apache-line-wordmark colored', name: 'Apache' }, { class: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS' }]} />
                            {/* <SkillDiv title="In Progress" icons={[]} /> */}
                        </div>
                    </section>
                    <footer>
                        <h5> --- Developed by Antônio Valter --- </h5>
                    </footer>
                </main>
            </div>
        );
    }
}

export default App;