import React from "react";
import { useState, useEffect } from "react";
import PostLink from "./PostLink";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ({ id }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getAllPost() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let json = await res.json();
      setPosts(json);
    }
    getAllPost(id);
  }, [id]);

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <div className="box">
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </div>
          {posts.map((post) =>
            post.id < 6 ? <PostLink key={post.id} id={post.id} /> : ""
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
