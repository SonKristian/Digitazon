// import { Fetch } from './components/fetch';
import { Prova } from './components/hook';
import { ProvaDue } from './components/hookDue';
import logo from './logo.svg';
import './App.css';

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
      {/* <Fetch></Fetch> */}
      <Prova></Prova>
      <ProvaDue></ProvaDue>
    </div>
  );
}

export default App;
