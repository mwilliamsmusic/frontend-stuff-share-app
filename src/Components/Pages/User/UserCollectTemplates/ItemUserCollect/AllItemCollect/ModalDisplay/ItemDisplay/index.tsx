import React from "react";
import {UnorderListStyle} from "../../../../../../../../CSS/globalCSS";
//import {ModalBtn} from "../../../../../userCSS";
interface Props {
  modalSwitch: () => void;
  itemForm: any;
  title: string;
}

function ItemDisplay(props: Props) {
  const form = JSON.parse(props.itemForm);
  const listForm =
    form &&
    Object.values(form).map((collect: any) => (
      <UnorderListStyle>
        <li key={collect.form}>{collect}</li>
      </UnorderListStyle>
    ));

  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={props.modalSwitch}>Edit</button>
      {listForm}
    </div>
  );
}

export default ItemDisplay;
