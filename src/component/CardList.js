import React from "react";
import Card from "./Card";

const CardList = ({ movies, deleteMovie, error }) => {
  return (
    <div className="movieApp">
      {movies.map((elm, key) => (
        <Card
          key={key}
          e={elm}
          deleteMovie={() => deleteMovie(elm.name)}
          error={() => error(elm.name)}
        />
      ))}
    </div>
  );
};

export default CardList;
