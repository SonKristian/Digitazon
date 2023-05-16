// import { Chat } from './components/chat'
// import { ToDo } from './components/todolist'
import logo from './logo.svg';
import './App.css';
// import { InputText } from './components/easyExercise';
// import { Board } from './components/tictactoe'
// import { ProductColumns } from './components/productColumns';
import { NotClickButton } from './components/buttonClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Chat></Chat> */}
      {/* <ToDo></ToDo> */}
      <NotClickButton />
      {/* <InputText /> */}
      {/* <Board /> */}
      {/* <ProductColumns /> */}
    </div>
  );
}

export default App;
