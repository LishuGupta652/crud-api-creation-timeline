import { useState } from 'react';
import './App.css';



function App() {
  const[ movies, setMovies ]= useState([
    {
      name:'harry potter',
      price: "$10",
      id: 1234
    },
    {
      name:'harry met sejal',
      price: "$20",
      id: 1235
    }
  ])
  return (
    <div>
      <h1>This is the movies app</h1>
      {movies.map(movie => {
        <div>some thing else</div>
      })}
    </div>

  );
}

export default App;
