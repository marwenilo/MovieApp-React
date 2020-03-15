import React, { Component } from "react";
import CardList from "./CardList";
import { movies } from "./data";
import NameFilter from "./NameFilter.js";
import Rate from "./Rating";

import Modal from "./Modal";
import { message } from "antd";
class CardContainer extends Component {
  state = {
    movies,

    nameFilter: "",
    minRatingFilter: 0,
    deletedMovie: ""
  };
  addNewMovie = (img, name, star) => {
    this.setState({
      movies: this.state.movies.concat({ img, star, name })
    });
  };
  handleSearch = input => {
    this.setState({
      nameFilter: input
    });
  };
  error = name => {
    message.error(`You did deleted this movie : ${name}`);
  };
  handlDelete = movie => {
    this.setState({
      movies: this.state.movies.filter(el => el.name !== movie)
    });
  };
  handleChange = newRating => {
    this.setState({
      minRatingFilter: newRating
    });
  };

  render() {
    const filtered = this.state.movies.filter(
      el =>
        el.star >= this.state.minRatingFilter &&
        el.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
    );
    return (
      <div className="cardContainer">
        <div className="header">
          <NameFilter handleSearch={this.handleSearch} b={this.searchMovies} />
          <Modal add={this.addNewMovie} />

          <Rate
            minRate={this.state.minRatingFilter}
            handleRate={this.handleChange}
          />
        </div>
        <CardList
          movies={filtered}
          deleteMovie={this.handlDelete}
          error={this.error}
        />
      </div>
    );
  }
}

export default CardContainer;
