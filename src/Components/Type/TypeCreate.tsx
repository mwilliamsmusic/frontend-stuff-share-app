import React from "react";

interface Props {
  createTitle: string;
  createTitleHandler: (title: any) => void;
  onSubmitHandler: (event: React.FormEvent) => void;
  createDisable: boolean;
}

function TypeCreate(prop: Props) {
  return (
    <form onSubmit={prop.onSubmitHandler}>
      <label htmlFor="create-title">
        <input
          id="create-title"
          value={prop.createTitle}
          placeholder="Enter Collection Name"
          onChange={(e) => prop.createTitleHandler(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" disabled={prop.createDisable}>
        Create Collection
      </button>
    </form>
  );
}

export default TypeCreate;
