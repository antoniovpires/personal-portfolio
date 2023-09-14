import ProjectDescription from './components/ProjectDescription';
import TextDiv from './components/TextDiv';
import SkillDiv from './components/skillDiv';
import Swiper from './components/Swiper';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectPictures from './components/ProjectPictures';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'eng', // Default language is Portuguese
            xpTitle: "",
            xpText: "",
            aboutMeTitle: "",
            aboutMeText: "",
            projects: [],
            toolsDivTitle: "Tools"
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

        const isPTBR = language === "br"

        const toolsDivTitle = isPTBR ? "Ferramentas" : "Tools"

        document.getElementById("profileDescription").innerHTML = isPTBR ? 'Graduando em <span className="highlight">Análise e Desenvolvimento de Sistemas</span>' : 'Undergraduate in <span className="highlight">Systems Analysis and Development</span>';

        document.getElementById("lngButton-eng").innerHTML = isPTBR ? '<span>Switch to English</span> &#127482;&#127480;' : '<span>Mudar para Português</span> &#127463;&#127479;';


        const aboutMeTitle = isPTBR ? "Sobre mim" : "About me";
        const aboutMeText = isPTBR ? <p>Sempre fui uma pessoa curiosa, e essa curiosidade provavelmente nunca irá desaparecer. Como um estudante autodidata, confio em minha capacidade de transformar dedicação em motivação para aprender, e também estou ciente de que sou responsável pelo meu aprendizado. Gosto muito de trabalhar em equipe, porque acredito que em grupo podemos ir muito mais distante.<br></br><br></br>Almejo imapctar o mundo positivamente através da tecnologia. Adoro trabalhar em projetos inovadores e tenho orgulho de ser um trabalhador voluntário em um que envolve programação. Gosto de desafios e estou sempre tentando melhorar minhas habiliaddes através do <b>Leetcode</b>, e estudando temas que sejam do meu interesse ou da empresa.</p> : 
        <p>As a self-taught student, I trust on my capability to transform dedication into fuel for learning, and I am also aware that I must be responsible for my apprenticeship. I love teamwork, because I firmly believe that as team we can always go further. I have always been a very curious person, and this curiosity is what leds me beyond, to learn more and more. <br></br><br></br>I have the ambition to positively impact the world through technology. Working on innovative projects is a mood booster for me and I am proud to be a volunteer worker in one involving programming. Challenges can make us grow bigger, and I am always striving to become better everyday, enhancing my skills on <b>Leetcode</b>, and also studying about topics of my interest or the company's</p>
        
        const xpTitle = isPTBR ? `Minha experiência` : `My experience`;
        const xpText = isPTBR ? <p>No último ano e meio tenho me dedicado ao estudo da programação, aprimorando constantemente minhas habilidades e ampliando meu conhecimento. Durante esse período, tive a oportunidade de trabalhar como desenvolvedor web em tempo integral por 11 meses, adquirindo uma valiosa experiência prática na área. Além das minhas atividades profissionais, participei ativamente de projetos paralelos, o que enriqueceu ainda mais minha expertise e alimentou minha paixão por criar soluções inovadoras.</p> : 
        <p>
            I have dedicated the past year and a half to immersing myself in the world of programming, constantly honing my skills and expanding my knowledge. During this time, I have had the privilege of working as a full-time web developer for 11 months, gaining valuable hands-on experience in the industry. In addition to my professional endeavors, I have actively participated in various side projects, which have further enriched my expertise and fueled my passion for creating innovative solutions. Also, I have been part of a volunteer project focused on teaching programming to teenagers.
        </p>;


        this.setState({ projects: [
            [
                "Kollect RESTful API",
                isPTBR ? <p>Respeitando as diretrizes RESTful, a API realiza operações para o cadastro de produtos em um sistema fictício. No momento, existem poucos campos para cadastro, e uma validação maior no front-end ainda é necessário. Entretanto, como o objetivo aqui é somente o aprendizado, não tomei muito tempo nisso. O front foi construído inteiramente com bootstrap. As chamadas para a API foram construídas utilizando AXIOS.<br></br><br></br>A estrutura do código pode parecer assustadora no início mas depois é fácil de entender. O padrão utilizado deixa o código muito mais legível e prático para realizar manutenções. Tenho como objetivo expandir esse sistema e torná-lo algo aberto ao público</p> 
                : 
                <p>Respecting the RESTful rules, the API does the CRUD operartions for a product registering fictional system. At the current moment, there are few fields in registration, and a better validation in the front-end is necessary. However, since the objective here is only the apprenticeship, I haven't spent much time at it. The front was build entirely with bootstrap. I have used AXIOS to call the API.<br></br><br></br>The code structure may look scary at the beginning but is quite easy to understand later. This pattern makes the code cleaner and easier to maintain. I intend to expand this system and make it public.</p> ,
                "https://github.com/antoniovpires/Kollect",
                "https://github.com/antoniovpires/Kollect",
                [
                    
            <i class="devicon-php-plain"></i>,
                    
            <i class="devicon-mysql-plain"></i>
            ,

            
            
            <i class="devicon-javascript-plain"></i>
          
          

                ]
            ],
            [
                "TMDB/IMDB ETL",
                isPTBR ? <p>Como projeto final do meu program de estágio, escolhi a seguinte pergunta: É possível dizer através dos dados quais séries dos anos 90 tem o maior potencial de serem resgatadas visand o público jovem adulto? O processo foi feito inteiramente serverless no ecossistema AWS. Para a extração de dados, utilizei o AWS Lambda, com Python e Spark. Para a transformação e tratamento dos dados utilizei o AWS Glue, também, com as mesmas tecnologias.<br></br><br></br>Por fim, os dados foram carregados para bancos de dados SQL no AWS Athena e utilizados em um dashboard criado no AWS Quicksight. Os resultados foram extremamente satisfatórios, visto que algumas séries apontadas como promissoras pelos dados já estão em processo de produção.</p> 
                : 
                <p>As a final project for my internship program, I've chosen the following question: Is it possible to tell through data which 90's tv series could be revived aiming young adults? The process was made entirely serverless using AWS. I've used AWS Lambda to extract data with Python and Spark. To transform the data I've used AWS Glue with the same stack.<br></br><br></br>Finally, the data was loaded to a SQL database with AWS Athena and displayed using AWS Quicksight. The results were extremely satisfactory, specially because some tv series pointed as promising are actually being brought back by streamings.</p> ,
                "",
                "",
                [
                    <i class="devicon-python-plain"></i>,
                    <i class="devicon-mysql-plain"></i>,

            <i class="devicon-amazonwebservices-original"></i>

                ]
            ],
            [
                "EZ Youtube Video Downloader",
                isPTBR ? "Criei esse aplicativo desktop com o objetivo de ter um jeito fácil e rápido de baixar conteúdo do Youtube. Utilizei Python, PyTube e Tkinter para o app, para transformá-lo em um executável, utilizei pyinstaller." : "I have made this desktop app with the objetctive of having a fast and easy way to download youtube content. I used Python, PyTube and Tkinter for the app, and to transform it into an executable I used pyinstaller",
                "#",
                "https://github.com/antoniovpires/ez-youtube-downloader",
                [
                    <i className="devicon-python-plain"></i>
                  ]

            ],
            [
                isPTBR ? "Página para empresa fictícia" : "Made-up Company Web Page",
                isPTBR ? "Esse é um dos projetos que possuo para páginas webs, servem para praticar código e noções de UX e UI. Me divirto bastante com esse tipo de site, consigo treinar várias habilidades. Clique para ir até o site!" : "This is one of the projects I have for web pages, they are good to practice coding and bot UX and UI notions. I have a lot of fun with this kind of website, since I can practice different skills. Click me!",
                "https://antoniovpires.github.io/insta_help-webpage/",
                "https://github.com/antoniovpires/insta_help-webpage",
                [<i className="devicon-html5-plain"></i>,<i className="devicon-css3-plain"></i>,<i className="devicon-javascript-plain"></i>]
            ],
            [
                isPTBR ? "Página para eventos" : "Fictional event web page",
                isPTBR ? "Esse é um site desenvolvido visando a divulgação de eventos. Possui espaço para as informações mais relevantes, e um visual arrojado para chamar a atenção do usuário. Isso, sem perder a facilidade na navegação. Clique para ir até o site!" : "This website was developed to promote events. It contains space for all relevant information that the user may require and also a very modern style. And it still has an easy navigation! Click me!",
                "https://antoniovpires.github.io/event-landing-page/",
                "https://github.com/antoniovpires/event-landing-page",
                [<i className="devicon-html5-plain"></i>,<i className="devicon-css3-plain"></i>,<i className="devicon-javascript-plain"></i>]
            ]
        ] });
        
        this.setState({ xpTitle });
        this.setState({ xpText });
        this.setState({ aboutMeText });
        this.setState({ aboutMeTitle });
        this.setState({ toolsDivTitle });
    };


    componentDidMount() {
        this.renderTableRows();
        AOS.init();
    }

    render() {
        return (
            <div className="App">
                <aside>
                    <div id="aside-content">
                        <button  id="lngButton-eng" onClick={this.handleTranslation}>
                        </button>
                        <div id="wrap" className="img-wrap" data-aos="fade-right">
                            <img id="profilePic" src={require('./project-pictures/foto_perfil.png')} alt="Man detailed in pixels"></img>
                        </div>
                        <div id="dev-info">
                            <h3 id="profileTitle" data-aos="fade-right" data-aos-delay="200">Antônio V. Pires</h3>
                            <p id="profileSubtitle" data-aos="fade-right" data-aos-delay="400">Web Developer</p>
                            <p id="profileDescription" data-aos="fade-right" data-aos-delay="600">
                            </p>
                        </div>
                        <div id="mediaLinks" data-aos="fade-right" data-aos-delay="800">
                            <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antoniovpires/" title="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a  target="_blank" rel="noreferrer" href="https://github.com/antoniovpires/" title="Github"><ion-icon name="logo-github"></ion-icon></a>
                            <a  target="_blank" rel="noreferrer" href="https://wa.me/5548999940355" title="Whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></a>
                        </div>
                        <p className="contactInfo" data-aos="fade-right" data-aos-delay="1000">
                            <ion-icon name="mail-outline" role="img" className="md hydrated" aria-label="mail outline"></ion-icon>
                            <a href="mailto:antoniovpiresnt@gmail.com?subject=Oportunidade&body=Hello! Can we talk?">antoniovpiresnt@gmail.com</a>
                        </p>
                    </div>
                </aside>
                <main>
                    <TextDiv title={this.state.aboutMeTitle} text={this.state.aboutMeText} />
                    <section id="mySkills">
                        <div id="skillsGrid">
                            <SkillDiv title="Front-End" icons={[{ class: 'devicon-react-original-wordmark colored', name: 'ReactJS' }, { class: 'devicon-vuejs-plain-wordmark colored', name: 'VueJS' },{ class: 'devicon-jquery-plain-wordmark colored', name: 'jQuery' }, { class: 'devicon-javascript-plain colored', name: 'JavaScript' }, { class: 'devicon-typescript-plain colored', name: 'Typescript' }, { class: 'devicon-bootstrap-plain-wordmark colored', name: 'Bootstrap' }, { class: 'devicon-sass-original colored', name: 'SASS' }, { class: 'devicon-tailwindcss-plain colored', name: 'Tailwind CSS' }]} />
                            <SkillDiv title="Back-End" icons={[{ class: 'devicon-php-plain colored', name: 'PHP' }, { class: 'devicon-nodejs-plain-wordmark colored', name: 'NodeJs' }, { class: 'devicon-python-plain-wordmark colored', name: 'Python' }, { class: 'devicon-java-plain-wordmark colored', name: 'Java' }]} />
                            <SkillDiv title="Databases" icons={[{ class: 'devicon-mysql-plain-wordmark colored', name: 'MySql' }, { class: 'devicon-sqlite-plain-wordmark colored', name: 'SQLite' }, { class: 'devicon-postgresql-plain-wordmark colored', name: 'PostgreSQL' }]} />
                            <SkillDiv title={this.state.toolsDivTitle} icons={[{ class: 'devicon-linux-plain colored', name: 'Linux' }, { class: 'devicon-git-plain colored', name: 'Git' }, { class: 'devicon-github-original colored', name: 'GitHub' }, { class: 'devicon-jira-plain colored', name: 'Jira' }, { class: 'devicon-docker-plain-wordmark colored', name: 'Docker' }, { class: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS' }]} />
                        </div>
                    </section>
                    <h2 id="projects-title">Projects</h2>
                    {
                        this.state.projects.map(function(project, i) {
                            return <ProjectDescription title={project[0]} text={project[1]} picture={ProjectPictures[i]} link={project[2]} repo={project[3]} stack={project[4]}/>
                        })
                    }
                    <TextDiv title={this.state.xpTitle} text={this.state.xpText} />
                    <section className="companiesDiv">

                        <Swiper language={this.state.language} />
                    </section>
                    <footer>
                        <div>
                            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#4206708e" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#8E0CF08e" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#950DFC8e" />
                            </g>
                            </svg>
                        </div>
                </footer>
                </main>
            </div>
        );
    }
}

export default App;