import React, { Component } from "react";
import Movie from "./movie";
import ListGroup from "./list-group";
import Pagination from "./pagination";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [
      {
        _id: "5c15",
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5
      },
      {
        _id: "5a16",
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4
      },
      {
        _id: "5t17",
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3
      },
      {
        _id: "6c18",
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        _id: "5d19",
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        _id: "5a20",
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        _id: "6b23",
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5
      },
      {
        _id: "6b22",
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5
      },
      {
        _id: "5b21",
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5
      }
    ],
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Thriller" },
      { id: 3, name: "Animation" },
      { id: 4, name: "Comedy" }
    ],
    selectedGenre: 1,
    pageSize: 2,
    selectedPage: 1
  };
  handleSelectedGenre = genre => {
    console.log(genre);
    this.setState({ selectedGenre: genre.id });
  };

  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };

  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  render() {
    const { genres } = this.state;
    const { selectedGenre } = this.state;
    // filtering movies based on genre
    const genre = genres.filter(genre => genre.id === selectedGenre);

    const filteredMovies = this.state.movies.filter(
      movie => movie.genre === genre[0].name
    );

    const paginatedMovies = this.paginate(
      filteredMovies,
      this.state.selectedPage,
      this.state.pageSize
    );

    return (
      <div>
        <p align="center">Total no of movies:{this.state.movies.length}</p>
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={genres}
              selectedGenre={this.state.selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
            />
          </div>
          <div className="col-6">
            {paginatedMovies.map(movie => (
              <Link
                to={{ pathname: `/movies/${movie._id}`, state: { movie } }}
                style={{ textDecoration: "none" }}
              >
                <Movie movie={movie} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination
          pageSize={this.state.pageSize}
          totalMovies={filteredMovies.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

export default Movies;
