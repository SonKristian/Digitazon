import "./App.css";
import ChatBody from "./component/ChatBody";

function App() {
  return (
    <div className="bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle">
      
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      <div className="uppercase font-bold text-2xl text-center mb-3">header</div>

      <div>
        <ChatBody />
      </div>


      <div>input</div>
    </div>
  );
}

export default App;
