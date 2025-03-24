import {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'FETCH_ERROR': 
      return {
        loading: false,
        post: {},
        error: 'Something went wrong'
      }
    default:
      return state
  }
}

function DataFetchingTwo() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        dispatch({ 
          type: 'FETCH_SUCCESS', 
          payload: response.data 
        })
      })
      .catch(error => {
        dispatch({ 
          type: 'FETCH_ERROR'
        })
      })
  }, [])

  return (
    <div>
      <h4>DataFetchingOne using useState and useEffect</h4>
      {state.loading ? 
        <div className='loading'>Loading...</div> : 
        <div id={state.post.id} className='post'>
          <h2>{state.post.title}</h2>
          <p>{state.post.body}</p>
        </div>
      }
      {state.error ? <div className='error'>{state.error}</div> : null}
    </div>
  )
}

export default DataFetchingTwo