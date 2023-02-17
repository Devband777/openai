import Input from './components/Input'
import Button from './components/Button'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className='App-left'>
        <Input />
        <Button />
      </div>
      <div className='App-right'>
        <input type='textarea'>
          
        </input>
      </div>
    </div>
  );
}

export default App;
