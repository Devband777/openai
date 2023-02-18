import './style.scss'

function Button ({
    text="...edit me...",
    onClick
}) {
    return (
        <div 
            className="button"
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default Button