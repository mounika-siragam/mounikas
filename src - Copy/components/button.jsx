import React from "react";

const Button = props => {
  return (
    <div>
      <input
        type="submit"
        value={props.value}
        disabled={props.errors}
        className="btn btn-secondary btn-block p-2 mt-3"
      />
    </div>
  );
};

export default Button;
