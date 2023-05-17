import { useState, useEffect } from "react";

const PostMain = ({ id }) => {

  const [post, setPost] = useState({});
  useEffect(() => {
    async function getPost(id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    }
    getPost(id);
  }, [id]);
  return (
    <div >
      <h1 >{post.title}</h1>
        <div>
          <h2>User Number {post.userId}</h2>
          <p> day ago</p>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostMain;