import React from "react";
interface Props {
  modalSwitch: () => void;
}
function EditDisplay(props: Props) {
  return (
    <div>
      edit display
      <button onClick={props.modalSwitch}>Cancel</button>
    </div>
  );
}

export default EditDisplay;
