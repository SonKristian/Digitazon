import { useState, useEffect } from "react";

const post_comments = "https://jsonplaceholder.typicode.com/posts/1/comments";


const PostMain = ({ id }) => {
+

  return (
    <main>
        <h1>{post.title}</h1>
        <div>
            <p>{post.body}</p>
        </div>
    </main>
  );
}

export default PostMain;