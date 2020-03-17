import React, { Component } from "react";
const Counter = props => {
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => props.handleIncr(props.id)}
      >
        +
      </button>
      <span>{props.value}</span>
      <button
        className="btn btn-warning"
        onClick={() => props.handleDecr(props.id)}
      >
        -{""}
      </button>
      <button onClick={() => props.handleremove(props.id)}>x</button>
    </div>
  );
};

export default Counter;
