import React, {FC, useRef, useState, useEffect, lazy} from "react";
import EditDisplay from "./EditDisplay";
import ItemDisplay from "./ItemDisplay";
import {ModalContainer} from "../../../../userCSS";
import Modal from "../../../../../../../Utils/Modal";

function MD(props) {
  const [ModalOpen, setModalOpen] = useState(false);
  const [ModalEdit, setModalEdit] = useState(false);
  /*
  const ref = useRef<HTMLDivElement>(null);
  // State for our modal


  function useOnClickOutside(ref: any, handler: any) {
    useEffect(() => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));
*/
  return (
    <div>
      {ModalOpen ? (
        //  <div ref={ref}>
        <Modal>
          <ModalContainer>sup</ModalContainer>
        </Modal>
      ) : (
        // </div>
        //  </div>
        <button onClick={() => setModalOpen(true)}>{props.title}</button>
      )}
    </div>
  );
}

export default MD;
