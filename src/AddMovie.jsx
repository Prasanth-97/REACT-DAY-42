import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie({ movielist, setMovielist }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
      />
      <Button
        variant="contained"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            summary: summary,
            rating: rating,
            trailer: trailer,
          };
          setMovielist([...movielist, newMovie]);
        }}
      >
        Add movie
      </Button>
    </div>
  );
}
