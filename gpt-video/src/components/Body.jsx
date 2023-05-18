import {useState} from "react"
const Body = () => {
    const [text, setText] = useState("")
    const ResponseGpt = async (text) => {
    //key rappresenta la chiave per far funzionare gpt
    const key = "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";
    //openai rappresenta il "server" che prende la richiesta
    const openai =
      "https://api.openai.com/v1/engines/davinci-codex/completions";

    //esegue una richiesta ad OpenAi, salva la risposta nella variabile res

    const res = await fetch(openai, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // indica che il corpo della richiesta è un oggetto JSON
        Authorization: `Bearer ${key}`, //Berear rappresenta il tipo del token
      },
      body: JSON.stringify({
        // per trasformare l'oggetto di configurazione in una stringa JSON
        prompt: text,
        max_tokens: 50,
        temperature: 0.6,
        n: 1,
      }),
    });
    const json = await res.json();

    //assegna alla variabile il testo della prima risposta e ne
    //rimuove gli spazi bianchi
    const chatGptResponse = json.choices[0].text.trim();
    return chatGptResponse;
  };
  return (
    <main className="flex bg-slate-500">
      <div>
        <input className="border-4 bg-indigo-300" value={text} onChange={(el) => setText(el.target.value)}></input>
      </div>
    </main>
  );
};

export default Body;
