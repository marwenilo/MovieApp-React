import React from "react";
import Rating from "./Rating";
import { Button, message } from "antd";

const Card = ({ e, deleteMovie, error }) => {
  const warning = e => {
    message.warning(`You gonna edit this movie : ${e.name}`);
  };

  return (
    <div className="movieCard flip-card" style={{ margin: "10px" }}>
      <div className="flip-card-inner">
        <div className="movieCard flip-card">
          <div>
            <img className="img" src={e.img} alt=""></img>
          </div>
          <div className="movieDesc">
            <p className="textName">
              {e.name} - {e.year}
            </p>
            <Rating minRate={e.star} />
          </div>
        </div>
        <div className="flip-card-back">
          <div className="back">
            <h4>{e.duration && `Duration: ${e.duration}`}</h4>
            <p>{e.discription && `Description: ${e.discription}`}</p>
          </div>
          <div className="cardBtn">
            <Button
              type="danger dashed"
              className="btnEdit"
              onClick={() => (deleteMovie(e.name), error(e.name))}
            >
              Delete
            </Button>
            <Button
              type="warning dashed"
              className="btnDelite"
              onClick={warning}
            >
              Edite
            </Button>
          </div>
          <div className="backcover"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
