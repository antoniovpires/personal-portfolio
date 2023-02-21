function skillDiv(props) {
    return (
        <div className="skillDiv">
            <h4>{props.title}</h4>
            <div className="skillDivIcons">
                {props.icons.map((icon) => {return <i className={icon.class} title={icon.name}></i>})}
            </div>
        </div>
    )
}


export default skillDiv