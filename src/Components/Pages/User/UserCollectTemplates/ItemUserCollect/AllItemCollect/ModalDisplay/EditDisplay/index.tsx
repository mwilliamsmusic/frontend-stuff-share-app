import React from "react";
import {UnorderListStyle} from "../../../../../../../../CSS/globalCSS";
interface Props {
  modalSwitch: () => void;
  itemForm: any;
  title: string;
}

function EditDisplay(props: Props) {
  const form = JSON.parse(props.itemForm);
  const listForm =
    form &&
    Object.keys(form).map((collect: any) => (
      <UnorderListStyle>
        <li key={collect.form}>{collect}</li>
      </UnorderListStyle>
    ));

  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={props.modalSwitch}>Cancel</button>
      {listForm}
    </div>
  );
}

export default EditDisplay;
