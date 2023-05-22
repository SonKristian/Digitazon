import { useState } from "react";
import PropTypes from 'prop-types';

const ChatInput = (props) => {
  const { sendMessage, loading} = props;

  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="flex clear-both align-middle justify-center w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src="./public/loading.gif" className="w-8 m-auto" />
      ) : (
        <>
          <input
            onKeyDown={(el) => {
              el.keyCode === 13 && el.shiftKey === false && handleSubmit();
            }}
            className="border-0 bg-transparent outline-none w-11/12"
            value={value}
            onChange={(el) => setValue(el.target.value)}
            type="text"
          />
          {/* onKeyDown con questa condizione permette di usare shift per andare a capo all'interno dell'input */}
          <img
            onClick={handleSubmit}
            className="w-[40px] h-[40px] hover:cursor-pointer ease-in duration-100 hover:scale-125"
            src="./public/send.png"
            alt="send.button"
          />
        </>
      )}
    </div>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired, // Add the missing prop type validation
 };

export default ChatInput;
