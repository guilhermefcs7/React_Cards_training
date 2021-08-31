import React from "react";

export default (props) => {
  const Aleatorio = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div>
      <h2>{Aleatorio}</h2>
    </div>
  );
};
