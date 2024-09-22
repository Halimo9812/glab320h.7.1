import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form"

export default function App() {

   // Constant with your API Key
   const apiKey = "6f536d05";

   // State to hold movie data
   const [movie, setMovie] = useState(null);
 
   // Function to get movies
   const getMovie = async(searchTerm) => {
     // Make fetch request and store the response
     const response = await fetch(
       `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`


     );
     // Parse JSON response into a JavaScript object
     const data = await response.json();
     // Set the Movie state to the received data
     setMovie(data);
   };

  return (
    <div className="App">
      <Form movieSearch = {getMovie}/>
      <MovieDisplay movie ={movie}/>
    </div>
  );
}

