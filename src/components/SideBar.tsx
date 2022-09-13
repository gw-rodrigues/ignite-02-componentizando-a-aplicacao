import { Button } from "./Button";

import "../styles/sidebar.scss";
import { useMoviesGenres } from "../Contexts/Movies";

export function SideBar() {
  const { genres, selectedGenreId, handleSelectedGenre } = useMoviesGenres();

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => {
          return (
            <Button
              key={String(genre.id)}
              genre={genre}
              onClick={() => handleSelectedGenre(genre.id)}
              selected={genre.id === selectedGenreId}
            />
          );
        })}
      </div>
    </nav>
  );
}
