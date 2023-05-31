import axios from 'axios'

async function call() {
  let res = await axios.post('http://localhost:3000/users', {
   id : 3
  })
  console.log(res.status, res.data)
}

call()