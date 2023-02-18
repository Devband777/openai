import {useState} from 'react'
import Input from './components/Input'
import Button from './components/Button'
import TextArea from './components/TextArea'
import axios from 'axios'
import './App.scss'


function App() {
  const [uploadedFile, setUploadedFile] = useState ('');
  const [fileTitle, setFileTitle] = useState ('Click to upload');
  const [result, setResult] = useState('')

  async function handleFormSubmittion (e) {
    e.preventDefault ();

    let form = document.getElementById ('form');
    let formData = new FormData (form);

    let res = await axios.post ('http://localhost:5000/upload', formData);
    console.log(res)
    if(res.data.status) {
      setResult(res.data.msg.choices[0].text)
    }

    // do something
    console.log("Form submitted")
  }

  function handleUploadedFile (e) {
    setUploadedFile (e.target.value);
    setFileTitle(e.target.files[0].name)
  }

  return (
    <div className="App">
      <div className='App-left'>
        <form
          encType="multipart/form-data"
          onSubmit={handleFormSubmittion}
          id="form"
        >
        <Input 
          name="uploadedFile"
          onChange={handleUploadedFile}
          text={fileTitle}
          value={uploadedFile}
          required
        />
        <Button 
          onClick={handleFormSubmittion}
        />
        </form>
      </div>
      <div className='App-right'>
        <TextArea 
          text={result}
        />
      </div>
    </div>
  );
}

export default App;
