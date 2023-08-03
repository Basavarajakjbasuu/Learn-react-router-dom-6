import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Link to='/'> Home </Link>
      <Link to='/about'> About </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
  </BrowserRouter>
  )
}

function Home() {
  return (
    <h2>Hey, This is Home</h2>
  )
}

function About() {
  return (
    <h2>Hey, This is About</h2>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
 