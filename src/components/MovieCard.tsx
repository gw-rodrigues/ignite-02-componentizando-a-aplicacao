import { memo } from "react";
import { Star, Clock } from "react-feather";

import "../styles/movie-card.scss";

interface MovieCardProps {
  card: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  };
}

export function MovieCardComponent({
  card: { Title, Poster, Ratings, Runtime },
}: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={Poster} alt={Title} />

      <div>
        <div className="movie-info">
          <span>{Title}</span>
          <div className="meta">
            <div>
              <Star /> {Ratings[0].Value}
            </div>

            <div>
              <Clock /> {Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MovieCard = memo(MovieCardComponent, (prevProps, nextProps) =>
  Object.is(prevProps.card, nextProps.card)
);
