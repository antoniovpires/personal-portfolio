import ProjectDescription from './ProjectDescription';
import SkillDiv from './skillDiv';
import Swiper from './Swiper';


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

function App() {   
  return (
    <div className="App">
        <aside>
            <img id="profilePicture" src={require('./project-pictures/canvas.png')} alt="Man detailed in pixels"></img>
            <h3 id="profileTitle">Antônio V. Pires</h3>
            <p id="profileSubtitle">Web Developer</p>
            <p id="profileDescription">
                Graduando em <span className="highlight">Análise e Desenvolvimento de Sistemas</span></p>
            <div id="mediaLinks">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antoniovpires/" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/antoniovpires/" title="Github"><i className="fa-brands fa-github"></i></a>
                <a target="_blank" rel="noreferrer" href="https://wa.me/5548999940355" title="Whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <p className="contactInfo">
            <ion-icon name="mail-outline" role="img" class="md hydrated" aria-label="mail outline"></ion-icon>
            <a href="mailto:antoniovpiresnt@gmail.com?subject=Oportunidade&body=Olá! Podemos conversar?">antoniovpiresnt@gmail.com</a>
            </p>
        </aside>
        <main id="projectsView">
            <section className="aboutDiv fade-bottom">
                <h2>Minha experiência</h2>
                <p>Estudo programação há <b>mais de um ano</b> e trabalho em tempo integral como <b>desenvolvedor há 8 meses</b>. Participei de projetos voluntariados e liderei a equipe do Centro Acadêmico na faculdade.</p>
            </section>
            <section className="companiesDiv fade-bottom">
                <small>Empresas que já confiaram no meu trabalho</small>
                <Swiper />
            </section>
            <section className="projectDiv project2 fade-right">
                <ProjectDescription title="Cadastro de Produtos para eCommerce" text="Tenho experiência no eCommerce e já trabalhei em projetos relacionados ao ramo. Nesse projeto, fiz um sistema para cadastro, atualização e exclusão de produtos registrados em uma loja fictícia. Um clássico CRUD, utilizando NoSQL com o ORM Prisma."/>
            </section>
            <section className="projectDiv project1 fade-left">
                <ProjectDescription title="Blog no estilo Diário de bolso" text="Esse foi um projeto em que o objetivo era ser simples e objetivo. A demanda foi criar um blog baseado em um caderno de anotações, em que fosse simples manter os registros e que fosse possível editá-los caso desejado."/>
            </section>
            <section className="aboutDiv fade-bottom">
                <h2>Sobre mim</h2>
                <p>Tenho a ambição de impactar o mundo positivamente através da tecnologia. Gosto de trabalhar em projetos <b>inovadores</b> e adoraria fazer parte de trabalhos voluntários que envolvam programação. Me dou muito bem com <b>trabalho em equipe</b> e tenho facilidade para me comunicar com pessoas (incluindo públicos maiores), <b>tanto em Português quanto em Inglês</b>. Sou autodidata, sei me <b>autogerenciar</b>, estou sempre atrás de novos conhecimentos e buscando aprimorar as minhas habilidades.</p>
            </section>
            <section className="aboutDiv fade-right">
                <h2>Minhas Skills</h2>
                <div id="skillsGrid">
                    <SkillDiv title="Front-End" icons={[{class: 'devicon-html5-plain colored', name: 'HTML5'}, {class: 'devicon-css3-plain colored', name: 'CSS3'}, {class: 'devicon-javascript-plain colored', name: 'JavaScript'}]}/>
                    <SkillDiv title="Frameworks/Libraries" icons={[{class: 'devicon-react-original colored', name: 'ReactJS'}, {class: 'devicon-jquery-plain-wordmark colored', name: 'jQuery'}, {class: 'devicon-express-original colored', name: 'ExpressJS'}, {class: 'devicon-bootstrap-plain colored', name: 'Bootstrap'}]}/>
                    <SkillDiv title="Back-End" icons={[{class: 'devicon-nodejs-plain colored', name: 'NodeJs'}, {class: 'devicon-python-plain colored', name: 'Python'}, {class: 'devicon-php-plain colored', name: 'PHP'}]}/>
                    <SkillDiv title="Databases" icons={[{class: 'devicon-mysql-plain-wordmark colored', name: 'MySql'}]}/>
                    <SkillDiv title="Tools" icons={[{class: 'devicon-linux-plain colored', name: 'Linux'}, {class: 'devicon-git-plain colored', name: 'Git'}, {class: 'devicon-github-original colored', name: 'GitHub'}, {class: 'devicon-jira-plain colored', name: 'Jira'}]}/>
                    <SkillDiv title="Em Progresso" icons={[{class: 'devicon-debian-plain colored', name: 'Debian'}, {class: 'devicon-docker-plain colored', name: 'Docker'}, {class: 'devicon-apache-line-wordmark colored', name: 'Apache'}, {class: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS'}]}/>
                </div>
            </section>
            <footer>
                <h5> --- Desenvolvido por Antônio Valter --- </h5>
            </footer>
        </main>
    </div>
  );
}

export default App;
