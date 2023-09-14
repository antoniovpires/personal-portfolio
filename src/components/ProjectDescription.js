import styled from 'styled-components'

function ProjectDescription(props) {

    let ProjectSection = styled.section`
        margin-top: 50px;
        height: 30%;
        color: white;
        background: url(${props.picture});
        background-repeat: no-repeat;
        background-size: cover;

        a {
        text-decoration: none;
        color: white;
        }

        div {
        padding: 40px;
        background-color: var(--black);
        opacity: 0.2;
        height: 100%;
        text-align: left;

            h2 {
                margin-bottom: var(--margin-half);

                i {
                    margin-left: 10px;
                }
            }

            a {
                font-size: 40px;
            }

            .projectTitle {
                display: flex;
                align-items: center;
            }

        }

        &:hover div {
        opacity: 1;
        transition: 0.2s;
        }` 

    return (
        <ProjectSection className="projectSection">
            <a href={props.link} target="_blank" rel="noreferrer">
                <div>
                    <h2>{props.title} {props.stack.map((project) => {
                            return project
                    })}</h2>
                    <p>{props.text}</p>
                    <a target="_blank" rel="noreferrer" href={props.repo}><i className="devicon-github-original-wordmark"></i></a>
                </div>
            </a>
        </ProjectSection>  
    )
}

export default ProjectDescription