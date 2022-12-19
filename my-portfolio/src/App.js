import ProjectDescription from './ProjectDescription';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      } else {
      reveals[i].classList.remove("active");
      }
  }
}

window.onload = () => {
  document.getElementById("projectsView").addEventListener("scroll", reveal);  
  reveal();
}

function App() {
  return (
    <div className="App">
      <main>
        <div id="profileBar">
            <img id="profilePicture" src={require('./project-pictures/canvas.png')} alt="Man detailed in pixels" style={{borderRadius: "100%"}}></img>
            <h3 id="profileTitle">Antônio V. Pires</h3>
            <p id="profileSubtitle">Web Developer</p>
            <p id="profileDescription">Criatividade. Inovação. Conhecimento.</p>
            <br></br>
            <p>&lt; Javascript + NodeJS + ExpressJS /&gt;</p>
            <p>&lt; React . PHP . MySQL/&gt;</p>
            <p>&lt; Bacharel em Relações Internacionais/&gt;</p>
            <p>&lt; Bilíngue (Inglês)/&gt;</p>
            <div id="divideLine"></div>
            <div id="mediaLinks">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antoniovpires/" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/antoniovpires/" title="Github"><i className="fa-brands fa-github"></i></a>
                <a target="_blank" rel="noreferrer" href="https://wa.me/5548999940355" title="Whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
        <div id="projectsView">
            <div className="aboutDiv">
                <h2>Sobre mim</h2>
                <p>Tenho 23 anos, sou Brasileiro e tenho a ambição de impactar o mundo positivamente com a tecnologia.</p>
                <p>Atuo profissionalmente como Desenvolvedor Web, estudo <b>Análise e Desenvolvimento de Sistemas</b> e jogo videogame nas horas que me sobram. Aprendi a programar de forma autodidata, assim como aprendi a falar Inglês. Tenho essa característica de estudar por conta própria e estar sempre atrás de aprender mais e melhorar o que já sei.</p>
                <p></p>
            </div>
            <div className="projectDiv project3 reveal fade-left">
                <ProjectDescription title="Landing Pages para eBook" text="Para aprender mais sobre o front-end, fiz landing pages para e-books, com foco em objetividade e facilidade de transmissão de ideias. Acredito que uma boa landing page deva conter apenas informações pertinentes e ser, gentilmente, direta ao ponto!"/>
            </div>
            <div className="projectDiv project2 reveal fade-right">
                <ProjectDescription title="Cadastro de Produtos para eCommerce" text="Tenho experiência no eCommerce e já trabalhei em projetos relacionados ao ramo. Nesse projeto, fiz um sistema para cadastro, atualização e exclusão de produtos registrados em uma loja fictícia. Um clássico CRUD, através do MySQL com o ORM Prisma."/>
            </div>
            <div className="projectDiv project1 reveal fade-left">
                <ProjectDescription title="Blog no estilo Diário de bolso" text="Esse foi um projeto em que o objetivo era ser simples e objetivo. A demanda foi criar um blog baseado em um caderno de anotações, em que fosse simples manter os registros e que fosse possível editá-los caso desejado."/>
            </div>

            <div style={{marginTop: "100px"}} className="aboutDiv reveal fade-bottom">
                <h2>Minha experiência</h2>
                <p>Praticamente cresci com computadores ao meu redor e, desde pequeno, procuro entender como eles funcionam. Há alguns meses venho trabalhando com sistemas embarcados e a Internet das Coisas (IOT). Tenho experiência principalmente com Javascript, mas trabalho também com PHP, Python, MySQL e React. Participei de projetos voluntariado e liderei a equipe do Centro Acadêmico na faculdade.</p>
            </div>
            <div id="footer">
                <h5> --- Desenvolvido por Antônio Valter --- </h5>
            </div>
        </div>
    </main>
    </div>
  );
}

export default App;
