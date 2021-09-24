import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";
import {SocialBtn} from "../../../../CSS/buttonsCSS";
import {
  CenterContent,
  LargeScreen,
  PageContainer,
  SmallScreen,
  Spacer,
  TitleStyle,
} from "../../../../CSS/GlobalCSS/globalCSS";
import {BLUE} from "../../../../CSS/GlobalCSS/typesGlobalCSS";
import {IUsername} from "../../../../Utils/basicInterfaces";
import {
  IAllCollects,
  updateAllCollects,
} from "../../../../Utils/Redux/Modules/collect/allCollectsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Utils/Redux/ReduxHook";
import {allCollectsUsernameURL} from "../../../../Utils/URL/apiURL";
import CollectionsViewMobile from "../../../Mobile/CollectionMobile/CollectionsViewMobile";

import {postCollect} from "../Utils/axiosCollectConfig";
import CollectionsView from "./CollectionsView";

interface RouteParams {
  username: string;
}

function Collections() {
  const {username} = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const allCollections = useAppSelector((state) => state.allCollects);

  async function getAllCollects() {
    const data: IUsername = {
      username: username,
    };
    try {
      const allCollects = await axios(
        postCollect(allCollectsUsernameURL, data)
      );
      const collects: Array<IAllCollects> = allCollects.data;
      dispatch(updateAllCollects(collects));
    } catch (error) {}
  }

  useEffect(() => {
    getAllCollects();
  }, []);

  return (
    <CenterContent>
      <PageContainer>
        <TitleStyle>
          <b>{username}'s Collections</b>
        </TitleStyle>
        <SocialBtn backgroundColor={BLUE}>
          Follow <FontAwesomeIcon icon={faUserPlus} />
        </SocialBtn>
        <Spacer height="25px" />
        <SmallScreen>
          <CollectionsViewMobile allCollections={allCollections} />
        </SmallScreen>
        <LargeScreen>
          <CollectionsView allCollections={allCollections} />
        </LargeScreen>
      </PageContainer>
    </CenterContent>
  );
}

export default Collections;
