import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import About from './components/About';
import ContactUs from './components/ContactUs';
import AddMovie from './components/AddMovie';
import NavBar from './components/NavBar';

function App() {
  //const [count, setCount] = useState(0)
  const [moviesArr, setMoviesArr] = useState([]);

  const addMovie = (newMovie) => {
    setMoviesArr([...moviesArr, newMovie]);
  };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Movies moviesArr={moviesArr} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
