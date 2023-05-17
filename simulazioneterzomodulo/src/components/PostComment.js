import React, {useState, useEffect} from 'react'
import Comment from './Comment';

const PostComments = ({id}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function getComments(id) {
          const resComment = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
          );
          const dataComment = await resComment.json();
          setComments(dataComment);
        }
        getComments(id);
      }, [id]);
  return (
    <div >
        <h1 >Comments</h1>
        {comments.map((comment) => (
            <Comment key={comment.id} user={comment.email} comment={comment.body}/>
        ))}
    </div>
  )
}

export default PostComments