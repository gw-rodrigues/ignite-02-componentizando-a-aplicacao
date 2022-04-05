interface GenreResponseProps {
    selectedGenre:{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
    }
}

export function Header({selectedGenre}:GenreResponseProps) {
    return(
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}