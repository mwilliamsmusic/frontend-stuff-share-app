import React, {Fragment} from "react";
import {
  CenterContent,
  LargeScreen,
  PageContainer,
  SmallScreen,
} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {IAllCollectsUser} from "../../../../../../Utils/Redux/Modules/user/allCollectsUserSlice";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import AllCollectsUserViewMobile from "../../../../../Mobile/UserMobile/AllCollectsUserViewMobile";

import AllCollectsView from "./AllCollectsView";

function AllCollects() {
  const allCollectsUser = useAppSelector((state) => state.allCollectsUser);
  return (
    <Fragment>
      <SmallScreen>
        <AllCollectsUserViewMobile allCollectsUser={allCollectsUser} />
      </SmallScreen>
      <LargeScreen>
        <AllCollectsView allCollectsUser={allCollectsUser} />
      </LargeScreen>
    </Fragment>
  );
}

export default AllCollects;
