import React from "react";
import {ModalBtn} from "../../../../../userCSS";
interface Props {
  modalSwitch: () => void;
}
function ItemDisplay(props: Props) {
  return (
    <div>
      item display
      <ModalBtn onClick={props.modalSwitch}>Edit</ModalBtn>
    </div>
  );
}

export default ItemDisplay;
