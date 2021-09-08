import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";

function AllCollectsView() {
  return (
    <Fragment>
      All Username Collections
      <button>
        Follow <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </Fragment>
  );
}

export default AllCollectsView;
