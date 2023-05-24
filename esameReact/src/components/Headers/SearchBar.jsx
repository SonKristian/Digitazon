import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react"

const Searchbar = ({Search}) => {
  const [search, setSearch] = useState("");

  async function searchProducts(searchContent) { 
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchContent}` 
    );
    const data = await response.json(); 
    return data.products; 
  }
  
  async function handleSearch() {  
    const products = await searchProducts(search); 
    Search(products);
  }
  
  return (
    <div className="search-icon-bar ">
        <input type="search" id="searchbar" placeholder="Search for your product" className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]"  onChange={(e) => setSearch(e.target.value)} />
            <button className="btn-container" type="button" onClick={search ? handleSearch : ""}><SearchIcon /></button>
    </div>
  );
};

export default Searchbar;
