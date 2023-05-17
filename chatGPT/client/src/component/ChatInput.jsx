const ChatInput = () => {
  return (
    <div className="flex clear-both align-middle justify-center w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
       
        <textarea 
        className="border-0 bg-transparent outline-none w-11/12"/>

        <img className="w-[40px] h-[40px] hover:cursor-pointer ease-in duration-100 hover:scale-125" src="./public/send.png" alt="send.button" />
    </div>
  )
}

export default ChatInput