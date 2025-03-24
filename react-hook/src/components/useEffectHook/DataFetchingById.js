import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingById() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  const handleClick = () => {
    setIdFromBtnClick(id)
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/photos/${idFromBtnClick}`)
      .then(
        res => {
          console.log(res)
          setPost(res.data)
        }
      )
      .catch(err => {
        console.log('Something went wrong: ', err.message)
      })
  }, [idFromBtnClick])
  return (
    <div>
      <label>DataFetchingById using Axios: </label>
      <input 
        type='text' 
        value={id} 
        onChange={e => setId(e.target.value)} 
      />
      <button type='button' onClick={handleClick}>Fetch Post</button>
      <div className='wrapper'>
        <div id={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.thumbnailUrl} width='200' height='200' />
        </div>
      </div>
    </div>
  )
}

export default DataFetchingById