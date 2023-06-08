import parole from "../db/words.json"  assert { type: "json" };
let selected = 0

export const getAllWords = async (req, res) => {
    res.send(parole);
};

function getSelectedInteger(max) {
    return Math.floor(Math.random() * max)
}

export const getRandomWords = async (req, res) =>{
    selected = getSelectedInteger(3)
    res.send(parole[selected])
}

export const checkWords = async (req, res) => {
    let current=parole[selected].word
    if(req.body.word.length > 1){
    if(req.body.word == current ){
        res.status(200).send({
            message: "o sce, hai trovato la parola"
        })
        return
    }
    res.status(200).send({
        message: req.body.word ,
        message2 : current
    })
}else{
    if(current.includes(req.body.word)){
        res.send({
            message : "hai azzeccato la lettera"
        })
}else{
    res.send({
        message :"lettera homosex"
    })
}
}
}

// export const attempt = async (req, res) => {
//     let attempts = 5

// }