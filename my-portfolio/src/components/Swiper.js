import styled from 'styled-components'

function SwiperProject(props) {

    let isPtBr = props.language === "br";

    let jobs = [
        {
            title: 'AWS Data Engineer',
            company: 'Compass.UOL',
            period: isPtBr ? '5 meses' : '5 months',
            descriptions: isPtBr ? <p><b>Estágio</b> em AWS Cloud Engineering. Estudei as principais tecnologias pertinentes ao trabalho de um engenheiro de dados e realizei diversos projetos na nuvem da AWS.<br></br><br></br>Ao fim do estágio, entreguei um projeto final que consistia em contruir as etapas de extração, transformação e carregamento de dados. Além disso, tive a honra de conquistar o certificado de <b>AWS Cloud Practitioner</b> ao fim do programa.</p> : <p><b>Internship</b> in AWS Cloud Engineering. I have studied the main technologies related to Data Engineering and also developed several projects in the AWS Cloud.<br></br><br></br>At the end of the internship, I delivered a project that consisted in building a data pipeline (extraction, transformation and loading). Also, I have had the honor of achieving the <b>AWS Cloud Practitioner certification</b> by the end of the program.</p>,
            stack: 
            [<i class="devicon-amazonwebservices-plain-wordmark colored"></i>,
            <i class="devicon-python-plain colored"></i>,
            <i class="devicon-docker-plain-wordmark colored"></i>,
            <i class="devicon-sqlite-plain colored"></i>,
            <i class="devicon-mysql-plain colored"></i>]
        },
        {
            title: 'Fullstack Developer',
            company: 'Onix Tecnologia',
            period: isPtBr ? '11 meses': '11 months',
            descriptions: isPtBr ? <p>Como um desenvolvedor fullstack, realizei diversas manutenções no sistema e implementei novas funcionalidades tanto no front-end quando no back-end. Já que essa foi minha primeira oportunidade em tempo integral como um programador, eu tive dificuldades no início para aprender todas as tecnologias necessárias.<br></br><br></br>Com muito esforço e dedicação, consegui aprender todas as habilidades necessárias e me tornei um profissional melhor. Tive dois grandes desafios nessa oportunidade. O primeiro era conseguir lidar com tantas tarefas diversificadas, e o outro era lidar com o Suporte ao Cliente.<br></br><br></br>Para lidar com o primeiro desafio, estudei técnigcas de organização para aprender a controlar as tarefas diversificadas e simultaneamente gerenciar bem o meu tempo. Sempre tendo em mente as deadlines. Para o suporte ao cliente, meu problema não estava em conversar com eles. Na verdade, a parte difícil era entender exatamente o que eles estavam buscando ou pedindo do sistema.</p> 
            : 
            <p>As a Fullstack Developer, I performed several system maintenances and implemented new features both in the front-end as in the back-end. Since this was my first full-time position as a programmer, I struggled at the beginning to pick up with all the technologies necessary. <br></br><br></br>With a lot of effort and dedication, I have managed to learn all the skills required and became a better professional. I had two great challenges in this position, the first being able to handle multiple different tasks and the second one handling customer support.<br></br><br></br>To manage the first challenge, I studied some "organizational" techniques in order to handle multiple tasks easier, always taking care of my time management and keeping up with the deadlines. For the customer support, I had no problem with talking to people. The real problem was being able to track their problems and find out exactly what they were looking or asking for.</p>,
            stack: 
            [<i class="devicon-php-plain colored"></i>,
            <i class="devicon-javascript-plain colored"></i>,
            <i class="devicon-mysql-plain colored"></i>,
            <i class="devicon-bootstrap-plain colored"></i>,
            <i class="devicon-jquery-plain colored"></i>]
        }
    ]

    
    let TextSection = styled.section`
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: var(--margin-total);
        margin-bottom: var(--margin-total);
        text-align: left;

        h4 {
            color: var(--color1) !important;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px solid rgb(0,0,0,0.1);
            padding-bottom: var(--margin-quarter);
            margin-bottom: var(--margin-quarter);

            img {
                max-width: 150px;
                filter: grayscale(1);
            }
        }

        .companyStack {
            h6 {
                margin-top: var(--margin-quarter);
            }

            div {
                display: flex;
                gap: 10px;

                i {
                    font-size: 45px;
                }

            }
        }
        

    ` 


    return (
        <div>
            
            
            {jobs.map((job) => {
                return <TextSection>
                            <h4>{job.title} - {job.company} / {job.period}</h4>
                            {job.descriptions}
                            <div className="companyStack">
                                <h6>Stack</h6>
                                <div>
                                    {job.stack.map((tech) => {
                                        return tech
                                    })}
                                </div> 
                            </div>
                        </TextSection>
            })}
            
        </div>
    )
}

export default SwiperProject

