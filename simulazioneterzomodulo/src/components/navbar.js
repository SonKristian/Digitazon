// Components/NavBar.js
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostLink from './PostLink';

const NavBar = ({id}) => {

    const [post, setPost] = useState([]);
    useEffect(() => {
      async function getAllPost(id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let json = await res.json();
        setPost(json);
      }
      getAllPost(id)
    }, [id]);

 return (
<div className='sidebar'>
    <nav>
       <ul>
        {post.map((post)=>
         post.id <=5 ? (
            <PostLink key={post.id} id={post.id} />
        ): ""
        )};
          <li>
            <div className='box'>
             <Link to="/Post">Post</Link>
             {/* <Link to={`/post/${post.id}`}>{post.title}</Link> */}
             </div>
          </li>
          <li>    
          <div className='box'>
             <Link to="/Post">Post</Link>
             </div>
          </li>
          <li>
          <div className='box'>
          <Link to="/Post">Post</Link>
          </div>
          </li>
          <li>
          <div className='box'>
          <Link to="/Post">Post</Link>
          </div>
          </li>
          <li>
          <div className='box'>
          <Link to="/Post">Post</Link>
          </div>
          </li>
       </ul>
    </nav>
    <Outlet />
</div>
 );
};

export default NavBar;