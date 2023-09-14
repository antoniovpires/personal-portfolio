import styled from 'styled-components'

function TextDiv(props) {

    let TextSection = styled.section`
        width: 90%;
        margin: auto;
        margin-top: var(--margin-total);
        margin-bottom: var(--margin-total);
        color: var(--color-letter);
        text-align: left;

        h2 {
            color: var(--color1) !important;
            margin-bottom: var(--margin-quarter);
            padding-bottom: var(--margin-quarter);
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        }

    ` 

    return (
        <TextSection className="aboutDiv">
            <h2>{props.title}</h2>
            {props.text}
        </TextSection>
    )
}

export default TextDiv