import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import "./styles/global.scss";

import { MoviesContext } from "./Contexts/Movies";

export function App() {
  return (
    <MoviesContext>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Content />
      </div>
    </MoviesContext>
  );
}
