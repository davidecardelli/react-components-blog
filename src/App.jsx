import { useState } from 'react'
import './App.css'
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PostList from './components/PostList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="layout">
        <TheHeader />
        <PostList></PostList>
        <TheFooter />
      </div>

    </>
  )
}

export default App
