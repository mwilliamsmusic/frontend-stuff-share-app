import React from "react";

interface Props {
  id: string;
  onSubmit: (event: React.FormEvent) => void;
}
function Form(props: Props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor={props.id}>
        <input id={props.id} value={props.id} placeholder={props.id} />
      </label>
      <button type="submit"></button>
      <br />
    </form>
  );
}

export default Form;
