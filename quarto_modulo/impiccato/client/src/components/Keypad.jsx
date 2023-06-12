
export const Keyboard = () => {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    return (
      <div className="keyboard">
        {letters.map((letter) => (
            <div key={letter} className="key"> 
            <button>{letter}</button> 
            </div>
        ))}
      </div>
    );
  };
