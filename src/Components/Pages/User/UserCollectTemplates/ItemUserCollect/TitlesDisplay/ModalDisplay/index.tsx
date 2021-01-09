import React, {FC, useRef, useState, useEffect, lazy} from "react";
import EditDisplay from "./EditDisplay";
import ItemDisplay from "./ItemDisplay";
import {
  ModalCenterContent,
  ModalPageContainer,
  TransOverlay,
} from "../../../../userCSS";
import {ModalContainer} from "../../../../userCSS";
import Modal from "../../../../../../../Utils/Modal";
interface Props {
  title: string;
}

function ModalDisplay(props: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  function modalSwitch() {
    setModalEdit(!modalEdit);
  }
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

  return (
    <div>
      {modalOpen ? (
        <Modal>
          <div ref={ref}>
            <ModalCenterContent>
              <ModalPageContainer>
                {modalEdit ? (
                  <EditDisplay modalSwitch={modalSwitch} />
                ) : (
                  <ItemDisplay modalSwitch={modalSwitch} />
                )}
              </ModalPageContainer>
            </ModalCenterContent>
          </div>
        </Modal>
      ) : (
        //  </TransOverlay>
        <button onClick={() => setModalOpen(true)}>{props.title}</button>
      )}
    </div>
  );
}

export default ModalDisplay;
