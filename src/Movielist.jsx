import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { useEffect } from "react";

export function Movielist() {
  const [movielist, setMovielist] = useState([]);

  const getMovies = () => {
    fetch("https://63dbaafeb8e69785e487d5b0.mockapi.io/movies")
    .then((data) => data.json())
    .then((mvs) => setMovielist(mvs))
  }
  useEffect ( () => getMovies(),[]);

  const deleteMovie = async (id) => {
   await fetch(`https://63dbaafeb8e69785e487d5b0.mockapi.io/movies/${id}`,{method : "DELETE"})
     getMovies();
  }
  return (
    <div>
      {/* <AddMovie movielist={movielist} setMovielist={setMovielist} /> */}
      <div className="movie-list">
        {movielist.map((mv) => (
          <Movie key={mv.id} movie={mv} id={mv.id} deletebutton={<button onClick={()=> deleteMovie(mv.id)}>Delete</button>}/>
        ))}
      </div>
    </div>
  );
}
