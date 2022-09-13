import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type genreProps = {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
};
type moviesGenresProps = {
  genres: Array<genreProps>;
  selectedGenre: genreProps;
  selectedGenreId: number;
  handleSelectedGenre: (id: number) => void;
};

const MoviesGenres = createContext<moviesGenresProps>({} as moviesGenresProps);

export function useMoviesGenres() {
  return useContext(MoviesGenres);
}
export function MoviesContext({ children }: any) {
  const [genres, setGenres] = useState<genreProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<genreProps>({
    id: 1,
  } as genreProps);
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);

  const handleSelectedGenre = (id: number) => {
    setSelectedGenreId(id);
  };

  useEffect(() => {
    api.get(`genres`).then((response) => {
      setGenres(response.data);
    });
    api.get(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  return (
    <MoviesGenres.Provider
      value={{ genres, selectedGenre, selectedGenreId, handleSelectedGenre }}
    >
      {children}
    </MoviesGenres.Provider>
  );
}
