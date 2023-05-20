// import { Chat } from './components/chat'
// import { ToDo } from './components/todolist'
import logo from './logo.svg';
import './App.css';
// import { InputText } from './components/easyExercise';
// import { Board } from './components/tictactoe'
// import { ProductColumns } from './components/productColumns';
import { NotClickButton } from './components/buttonClick';
import RgbExercise from './components/RgbExercise';
import InputLabel from './components/InputLabel';
// import ListaPuntata from './components/listaPuntata';

function App() {
  return (
    <div className="App">
      {/* <Chat></Chat> */}
      {/* <ToDo></ToDo> */}
      {/* <InputText /> */}
      {/* <Board /> */}
      {/* <ProductColumns /> */}
      {/* <ListaPuntata /> */}
      <NotClickButton />
      <RgbExercise />
      <InputLabel />
    </div>
  );
}

export default App;
