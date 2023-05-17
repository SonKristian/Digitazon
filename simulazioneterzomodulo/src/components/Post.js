import React from "react";
import Navbar from "../components/navbar";
import { Link, useParams } from "react-router-dom";
import PostMain from "./PostMain";
import PostComment from "./PostComment";

const Post = () => {
  const { id } = useParams();
  return (
    <main>
      <Navbar selectedId={id}/>
      <div>
        <Link to="/">
        </Link>
        <PostMain id={id} />
        <PostComment id={id} />
      </div>
    </main>
  );
};

export default Post;