import axios from "axios"


const endpoint = "https://superheroapi.com/api/235074712596162/70/biography"

async function call() {
    await axios.get(endpoint, {
    }).then(response =>{
       console.log(response.data)
    })

  };

  call()