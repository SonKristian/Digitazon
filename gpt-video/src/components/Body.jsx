import {useState} from "react"


const Body = () => {
    const [text, setText] = useState("")
    const [message, setMessage]= useState([])    
    
    const ResponseGpt = async (text) => {
    //key rappresenta la chiave per far funzionare gpt
    const key = "api-key";
    //openai rappresenta il "server" che prende la richiesta
    const url = "https://api.openai.com/v1/engines/davinci-codex/completions";

    //esegue una richiesta ad OpenAi, salva la risposta nella variabile res

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json", // indica che il corpo della richiesta è un oggetto JSON
        Authorization : `${key}`, //Berear rappresenta il tipo del token
      },
      body: JSON.stringify({
        // per trasformare l'oggetto di configurazione in una stringa JSON
        prompt: text,
        stream: true,
        max_tokens: 1000,
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        top_p: 1,
        presence_penalty: 1,
        message,
      }),
    });
    const json = await res.json();

    //assegna alla variabile il testo della prima risposta e ne
    //rimuove gli spazi bianchi
    const chatGptResponse = json.choices[0].text.trim();
    return chatGptResponse;
};
   
        async function handleResponse () {
    //questa condizione serve quando l'utente invia un messaggio, viene inserito all'interno dell'oggetto
    //che ha ruolo User e content uguale al testo scritto dall'utente, viene poi settato di nuovo a stringa vuota
    //in modo che l'utente possa mandare più messaggi
        if(text !== ""){
        setMessage((prevMessage)=>[...prevMessage, {role : "user", content: text}])   
        console.log(message) 
        setText("")
        
        //la riga 47 esegue la chiamata asincrona e processa ciò che l'utente chiede ossia "text", una volta 
        //eseguita la fetch si ha in return la risposta di ChatGPT e l'oggetto ha come contenuto proprio la risposta
        //ossia chatGptRespone

        const chatGptResponse = await ResponseGpt(text)
        setMessage((prevMessage)=>[...prevMessage, {role : "ChatGpt", content: chatGptResponse}])
        console.log(chatGptResponse)
        console.log(message)
        }
    }

  return (
    <main>
        <div>
            {message.map((message, index)=>(
                <div key={index}>
                    <p>{message.role} : {message.content}</p>
                </div>
            ))}
        </div>
      <div>
        <input value={text} onChange={(el) => setText(el.target.value)}></input>
        <button onClick={handleResponse}>Send</button>
      </div>
    </main>
  );
};

export default Body;
