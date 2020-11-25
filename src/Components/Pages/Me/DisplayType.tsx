import React from "react";

interface Props {
  type: string;
  text: string;
}

function DisplayType({type, text}: Props) {
  return (
    <div>
      <h2>Cool {type}</h2>
      <h4>{text}</h4>
    </div>
  );
}

export default DisplayType;
