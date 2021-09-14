import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {SocialBtn} from "../../../../../CSS/buttonsCSS";
import {
  CenterContent,
  PageContainer,
  Spacer,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {GridStandardList} from "../../../../../CSS/listsCSS";
import CollectionsView from "./CollectionsView";

interface Props {
  username: string;
}

function AllCollectsView(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <h2>{props.username}'s Collections </h2>
        <SocialBtn backgroundColor={BLUE}>
          Follow <FontAwesomeIcon icon={faUserPlus} />
        </SocialBtn>
        <Spacer height="25px" />

        <CollectionsView />
      </PageContainer>
    </CenterContent>
  );
}

export default AllCollectsView;
