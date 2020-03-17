import React from "react";
import Counter from "./counter";
const Counters = props => {
  return (
    <div>
      {props.counters.map(counter => (
        <Counter
          id={counter.id}
          value={counter.value}
          handleIncr={props.handleIncr}
          handleDecr={props.handleDecr}
        />
      ))}
    </div>
  );
};

export default Counters;
