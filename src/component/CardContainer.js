import React, { Component } from 'react'
import CardList from './CardList'
import { movies } from "./data"
import NameFilter from './NameFilter.js'
import Rate from "./Rating"
import RatingFilter from './RatingFilter'
import Modal from './Modal'
class CardContainer extends Component {
  state = {
    movies,

    nameFilter: '',
    minRatingFilter: 0,

  }
  addNewMovie=(img,name,star)=>{
    this.setState({
      movies: this.state.movies.concat({img,star,name})

    })
  }
handleSearch = (input) => {
  this.setState({
    nameFilter:input
  })
}
handleChange=(newRating) => {
  this.setState({
    minRatingFilter: newRating
  })
}


  render() {
    // const { nameFilter,movies } = this.state;
    const filtered = this.state.movies.filter(el => el.star >= this.state.minRatingFilter &&
      el.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()))
    return (
      <div className="cardContainer">
        <div className="header">
          <NameFilter
            handleSearch={this.handleSearch}
            b={this.searchMovies} />
          <Modal add={this.addNewMovie} />

          <Rate minRate={this.state.minRatingFilter}
          handleRate={this.handleChange} />
      



        </div>
        <CardList movies={filtered} />

      </div>
    )
  }
};

export default CardContainer;
