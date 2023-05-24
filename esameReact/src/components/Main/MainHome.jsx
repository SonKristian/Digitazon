import Cards from "./Cards";
import { useEffect , useState } from "react"

const MainHome = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
 
    async function fetchProducts (){
        const res = await fetch("https://dummyjson.com/products")
        const json = await res.json()
        const products = json.products
        setProduct(products) 
     }
     
     fetchProducts()
      }, []);

  return (
    <div className="card-container">
          {products.map((product, index) => (
            <Cards key={index} product={product}/>
          ))}
    </div>
  );
};

export default MainHome;
