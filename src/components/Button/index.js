import './style.scss'

function Button ({
    text="...edit me..."
}) {
    return (<div className="button">
        {text}
    </div>)
}

export default Button