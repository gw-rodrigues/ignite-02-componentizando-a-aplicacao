import { useEffect, useMemo, useState } from "react";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { api } from "../services/api";

import "../styles/content.scss";
import { useMoviesGenres } from "../Contexts/Movies";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  const { selectedGenreId } = useMoviesGenres();

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} card={movie} />
            ))
            //<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          }
        </div>
      </main>
    </div>
  );
}
