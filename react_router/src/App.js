// App.js
import  MainHome  from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { NoMatch } from './components/NoMatch';
import Products from './components/products';
import "./index.css" 

const App = () => {
 return (
    <>
    <MainHome />
       <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/products" element={<Products />} />
       </Routes>
    </>
 );
};

export default App;