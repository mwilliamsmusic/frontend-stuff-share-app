import {faBookmark, faGlasses} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {BookmarkArea, BooknarkCoolGrid, CoolArea} from "./bookmarkCoolViewCSS";

interface Props {
  coolHandler: () => void;
  bookmarkHandler: () => void;
  buttonDisable: boolean;
  coolValue: number;
}

function BookmarkCoolView(props: Props) {
  return (
    <BooknarkCoolGrid>
      <BookmarkArea>
        <button disabled={props.buttonDisable} onClick={props.coolHandler}>
          Bookmark <FontAwesomeIcon icon={faBookmark} />
        </button>
      </BookmarkArea>
      <CoolArea>
        <button disabled={props.buttonDisable} onClick={props.bookmarkHandler}>
          Cool <FontAwesomeIcon icon={faGlasses} />
        </button>
      </CoolArea>
    </BooknarkCoolGrid>
  );
}
export default BookmarkCoolView;
