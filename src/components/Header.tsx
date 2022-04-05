interface GenreResponseProps {
    selectedGenre: {
        title: string;
    }
}

export function Header({selectedGenre} : GenreResponseProps) {
    return(
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}