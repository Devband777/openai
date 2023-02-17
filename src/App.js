import Input from './components/Input'
import Button from './components/Button'
import TextArea from './components/TextArea'
import './App.scss'


function App() {
  return (
    <div className="App">
      <div className='App-left'>
        <Input />
        <Button />
      </div>
      <div className='App-right'>
        <TextArea />
      </div>
    </div>
  );
}

export default App;
