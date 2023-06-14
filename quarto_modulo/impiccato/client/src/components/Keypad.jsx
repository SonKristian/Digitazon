export const Keyboard = ({ onLetterClick }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  
    return (
      <div className="keyboard">
        {letters.split('').map((letter) => (
            <div key={letter} className="key"> 
            <button onClick={() => onLetterClick(letter)}>{letter}</button> 
            </div>
        ))}
      </div>
    );
  };