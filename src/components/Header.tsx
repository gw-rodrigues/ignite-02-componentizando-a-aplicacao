import { useMoviesGenres } from "../Contexts/Movies";

export function Header() {
  const { selectedGenre } = useMoviesGenres();
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
