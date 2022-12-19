function ProjectDescription(props) {
    return (
        <div className="projectDescription">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default ProjectDescription