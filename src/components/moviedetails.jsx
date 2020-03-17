import React, { Component } from "react";
class MovieDetails extends Component {
  state = {};
  handleBack = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1 className="text-center"> Movie Details page</h1>
        <h1> selected Movie #>{this.props.match.params.id}</h1>
        <h1 className="text-center text-primary">
          {this.props.location.state.movie.title}
        </h1>
        <button className="btn btn-primary" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default MovieDetails;
