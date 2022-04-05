import { Button } from './Button';

import './styles/sidebar.scss';

interface GenreResponseProps {
  genre:{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  selectedGenreId:number;
  handleClickButton:(id: number)=>void;
}
export function SideBar({genre, selectedGenreId, handleClickButton}:GenreResponseProps) {
  return(
    <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
    />
  )
}