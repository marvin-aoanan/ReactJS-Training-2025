import {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong')
      })
  }, [])

  return (
    <div>
      <h4>DataFetchingOne using useState and useEffect</h4>
      {loading ? 
        <div className='loading'>Loading...</div> : 
        <div className='post'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      }
      {error ? <div className='error'>{error}</div> : null}
    </div>
  )
}

export default DataFetchingOne