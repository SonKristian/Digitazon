import { useState, useEffect } from "react"

const gameHome = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
      async function fetchWords() {
        const res = await fetch("http://localhost:3001/");
        const json = await res.json();
        setWords(json);
      }
      fetchWords();
    }, []);
  
    return (
      <div>
          {words.map((w) => (
          <div>
            <ul>
              <li>{w.words}</li>
            </ul>
          </div>
        ))} 
      
      </div>
    );
  };

export default gameHome