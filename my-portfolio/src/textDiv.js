function textDiv(props) {
    return (
        <section className="aboutDiv fade-bottom">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    )
}

export default textDiv