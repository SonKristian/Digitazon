import "./App.css";
import Hangman from "./components/Hangman";
import { Keyboard } from "./components/Keypad";
import { useState, useEffect } from "react";
import NewWord from "./components/NewWord";

function App() {
  const [count, setCount] = useState(0);
  const [toGuess, setToGuess] = useState([]);
  const [cens, setCens] = useState([]);
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/words/random");
        const data = await response.json();
        setToGuess(data.word);
        setCens(Array(data.word.length).fill("_"));
      } catch (error) {
        console.error("Errore nella chiamata API:", error);
      }
    }

    fetchData();
  }, [counter]);

  const handleLetterClick = (letter) => {
    if (toGuess.includes(letter)) {
      const updatedCens = cens.map((element, index) =>
        toGuess[index] === letter ? letter : element
      );
      setCens(updatedCens);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

 function handleCount() {
      setCounter(counter => counter + 1)
      setCount(0)
 }
  return (
    <>
      <Hangman count={count} />
      <div className="word">
        {cens.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>   
      {count >= 5 && <NewWord onClick={handleCount}/>} 
      <Keyboard onLetterClick={handleLetterClick} />
    </>
  );
}

export default App;

// serve funzione che fornisce punti quando indovini la parola
// limite di errori alla parola
