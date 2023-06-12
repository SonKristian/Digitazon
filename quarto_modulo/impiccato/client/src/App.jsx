import "./App.css";
import Hangman from "./components/Hangman";
import { Keyboard } from "./components/Keypad";

function App() {
  return (
    <>
      <Hangman />
      <Keyboard />
    </>
  );
}

export default App;
