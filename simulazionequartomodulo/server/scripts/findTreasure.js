import axios from "axios"

// const endpoint = "https://37b2-2-44-90-143.ngrok-free.app/keys/g6h7i8j9k0l1"


// async function call() {
//     await axios.get(endpoint, {
//         headers : {
//             "name" : "Cristian Di Napoli"
//         }
//     }).then(response =>{
//        console.log(response.data)
//     })

//   };

//   call()

async function findTreasure(key) {
let endpoint = `https://37b2-2-44-90-143.ngrok-free.app/keys/${key}`
const response = await axios.get(endpoint)
// console.log("response" + response)
const data = response.data
// console.log("data" + data)
console.log(key)
if(data.treasure){
    console.log("Hai trovato il tesoro", endpoint)
    return
} else {
    for(let i=0; i< data.children.length; i++){
        await findTreasure(data.children[i].key);
        }
    }
}

findTreasure("a0b1c2d3e4f5")