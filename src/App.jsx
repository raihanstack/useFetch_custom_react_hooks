import {useFetch} from './useFetch'
import './App.css'

function App() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    []
  );

  return (
    <>
      <h2>All Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;