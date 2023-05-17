import { Link } from "react-router-dom";

const PostLink = ({id}) => {
    return (
    <div className='box'>
        <li>
             <Link to={`/posts/${id}`}>Post {id} </Link> 
        </li>
    </div>
    )
}

export default PostLink;