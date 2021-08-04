import React, {FC, useRef, useState, useEffect} from "react";

import {MeBtn} from "../../../Navbar/navbarCSS";
import {usernameLS} from "../../../../Utils/storageData";
import AuthModalView from "./AuthModalView";

interface Props {
  logout: () => void;
}

const AuthModal: FC<Props> = ({logout}) => {
  const ref = useRef<HTMLDivElement>(null);
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);

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
      {isModalOpen ? (
        <div ref={ref}>
          <AuthModalView logout={logout} />
        </div>
      ) : (
        <MeBtn onClick={() => setModalOpen(true)}>{usernameLS}</MeBtn>
      )}
    </div>
  );
};

export default AuthModal;
