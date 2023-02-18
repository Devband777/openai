import { useState } from 'react';
import './style.scss'

function Input ({
    text = "Click to upload a file",
    name = "",
    value,
    onChange
}) {
    return (<div className="input">
        <label for="upload-resume">{text}</label>
        <input 
            type="file" 
            value={value}
            name={name} 
            id="upload-resume" 
            onChange={onChange}
        />
    </div>)
}

export default Input