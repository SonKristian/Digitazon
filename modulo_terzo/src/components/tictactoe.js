function Square({value}) {
    function handleClick (){
       console.log("clicked")
    }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
