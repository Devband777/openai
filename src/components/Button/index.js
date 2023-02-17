import './style.scss'

function Button ({
    text="...edit me..."
}) {
    const test = async () => {
    }

    return (
        <div 
            className="button"
            onClick={() => {
                test()
            }}
        >
            {text}
        </div>
    )
}

export default Button