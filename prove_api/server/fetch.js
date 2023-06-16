import axios from "axios"


const endpoint = "https://comicvine.gamespot.com/api/character"

async function call() {
    await axios.get(endpoint, { 
      header: "d2cedd832deac24375726e09768168c588619073"
    },{
    }).then(response =>{
       console.log(response.data)
    })

  };

  call()