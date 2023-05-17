import ChatBody from "./component/ChatBody";
import ChatInput from "./component/ChatInput";

function App() {
  return (
    <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle">
      
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      <div className="font-bold text-2xl text-center mb-3">NapoliGPT 3.0</div>

      <div className="h-[90%] overflow-auto w-full max-w-4cl min-w-[20rem] py-8 px-4 self-center">
        <ChatBody />
      </div>


      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
