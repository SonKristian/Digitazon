import { useState, useEffect } from "react"

export function Fetch() {
   const [products, setProduct] = useState([])
   useEffect(() => {

   async function fetchProducts (){
       let res = await fetch("https://fakestoreapi.com/products")
       let json = await res.json()
       setProduct(json) 
    }
    fetchProducts()
     }, [products]);
  return (
    <>
        <h1>Fetch</h1>
        {products.map((el) => {
        return(
          <div key={el.id}>
          <h2>{el.title}</h2>
          <img src={el.image} alt=" "></img>
          </div>
        )
        })}
    </>
  )
}
