import { Icon } from "./Icon";

import "../styles/button.scss";
import { ButtonHTMLAttributes, memo, useContext } from "react";
import { useMoviesGenres } from "../Contexts/Movies";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre: {
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  };
  selected: boolean;
}

export function ButtonComponent({
  genre: { title, name: iconName },
  selected,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) =>
  Object.is(prevProps.genre, nextProps.genre)
);
