import React, {Dispatch, Fragment, SetStateAction} from "react";
import {useRecoilValue} from "recoil";
import {StdBtn, UnorderListStyle} from "../../../../../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../CSS/ITGlobalCSS";
import {
  userItemFormState,
  userItemInfoState,
} from "../../../../../../../Store/userCollect/userAtoms";

interface Props {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

function ItemDisplayView(props: Props) {
  const userItemInfo = useRecoilValue(userItemInfoState);
  const userItemForm = useRecoilValue(userItemFormState);

  const form = userItemForm === null ? null : Object.entries(userItemForm);

  const itemForm =
    form &&
    form.map(([k, v]) => (
      <UnorderListStyle>
        <li>{`${k}: ${v}`}</li>
      </UnorderListStyle>
    ));

  return (
    <Fragment>
      <h2>{userItemInfo.title}</h2>
      {itemForm}

      <StdBtn
        bgColor={BLUE}
        brdColor={PINK}
        onClick={() => props.setIsEdit(true)}
      >
        Edit
      </StdBtn>
    </Fragment>
  );
}

export default ItemDisplayView;
