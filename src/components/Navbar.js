import React from "react";
// import {data} from '../data';
import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;           // bug
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({                         // bug
      searchText: e.target.value,
    });
  };

  // handleChange = (e) => {
  //   function callback() {
  //     if (this.state.searchText !== "") {
  //       const { searchText } = this.state;
  //       console.log("state search text => ", searchText);
  //       this.props.dispatch(handleMovieSearch(searchText));
  //     }
  //   }
  //   this.setState(
  //     {
  //       searchText: e.target.value,
  //     },
  //     callback
  //   );
  // };
  // handleSearch = () => {
  //   if (this.state.searchText !== "") {
  //     const { searchText } = this.state;
  //     this.props.dispatch(handleMovieSearch(searchText));
  //   }
  //   return;
  // };

  render() {
    const {result: movie,showSearchResults} = this.props.search;
    return (
      <div className="navbar">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleMovieSearch}>
            Search
          </button>

          { showSearchResults && 
          <div className="search-results">
            <div className="search-result">
              <img src={movie[0].Poster} alt="search-pic" />
              <div className="movie-info">
                <span> {movie[0].Title }</span>
                <button onClick={() => this.handleAddToMovies(movie[0])}>Add to Movies</button>
              </div>
            </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
