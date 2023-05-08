import { useState, useEffect } from 'react';
// Sometims, deleting/relacing the entire src folder will cause errors in React
// Just solve it by killing the current terminal, open a new one, type "npm start" again
// You can close it by clicking of by typing ctrl + c, then "y"
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard"; //no need to write file extension if it is .jsx

// We will use an API request from an existing movie application website/database
// Go to https://www.omdbapi.com/, make a new account, check email message. Email content is shown below:
/*
Here is your key: e8325dff     Please append it to all of your API requests,
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e8325dff
Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=6ceeb64c-b91b-4404-8570-aa3389346b56
*/

const API_URL = `http://www.omdbapi.com/?apikey=e8325dff`;
//const API_URL = 'http://www.omdbapi.com/?apikey=c032e2d7';
//const API_URL = `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=e8325dff`;

const movie1={
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}
// From the console log look into one of the output array, right click, "copy object".

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (movie_title) => {
    const response = await fetch(`${API_URL}&s=${movie_title}`);
    //const response = await fetch(`http://www.omdbapi.com/?apikey=e8325dff&s=spiderman`);
    const data = await response.json();
    //console.log(data);
    //console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies(`spiderman`);
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          // value="Superman"
          value={searchTerm}
          //onChange={() => {}} /callback funciton    e means event
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search-icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0
        ? ( // If at least 1 movie exists from the title we searched...
          <div className="container">
            {/* <div className="movie">
              <div>
                <p>{movie1.Year}</p>
              </div>
              <div>
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={`Missing image for: ${movie1.Title}`}/>
              </div>
              <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
              </div>
            </div> */}

            {/* <MovieCard movie1={movie1} /> */}
            {/* <MovieCard movie1={movies[0]} /> */}

            {movies.map((current_movie) => (
              <MovieCard movie={current_movie}/>
              // This will dynaically loop over the movies array (which was fethced from the API GET request). We're taking each individual movie and dynamically passing it as a prop (property) to the MovieCard component
            ))}
          </div>
        ) : ( // If no movie exists from the title we searched...
          <div className = "empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;