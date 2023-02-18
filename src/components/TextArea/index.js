import './style.scss'

function TextArea ({
    text
}) {
    return (<div className="textarea">
        <textarea 
            value={text}
        />
    </div>)
}

export default TextArea