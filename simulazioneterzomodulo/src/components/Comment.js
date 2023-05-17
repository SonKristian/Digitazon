const Comment = ({user, comment}) => {
    return (
      <div >
          <div>
              <h4>{user}</h4>
          </div>
          <p>{comment}</p>
      </div>
    )
  }
  
  export default Comment