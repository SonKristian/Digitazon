import { Link } from "react-router-dom";

const PostLink = ({id}) => {
    return (
    <li>
     <Link to={`/posts/${id}`}>Post {id} </Link> 
    </li>
    )
}

export default PostLink;