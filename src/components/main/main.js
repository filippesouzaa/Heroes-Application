import React from "react";
import Movies from "../movies/movies";
import "./main.css";

const Main = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="mainContainer">
      <input
        className="searchBar"
        placeholder="Busque por um filme por nome, ano ou gênero"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <Movies search={search} setSearch={setSearch} />
    </div>
  );
};

export default Main;
