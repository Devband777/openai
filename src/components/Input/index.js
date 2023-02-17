import './style.scss'

function Input ({
    placeholder = "Click to upload a file"
}) {
    return (<div className="input">
        <label for="upload-photo">{placeholder}</label>
        <input type="file" name="photo" id="upload-photo" />
    </div>)
}

export default Input