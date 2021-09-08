import axios from "axios";
import React, {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
  CenterContent,
  PageContainer,
} from "../../../../CSS/GlobalCSS/globalCSS";
import {IUsername} from "../../../../Utils/basicInterfaces";
import {allCollectsUsernameURL} from "../../../../Utils/URL/apiURL";

import {postCollect} from "../Utils/axiosCollectConfig";
import AllCollectsView from "./AllCollectsView";

interface RouteParams {
  username: string;
}

function Collect() {
  const {username} = useParams<RouteParams>();

  async function getAllCollects() {
    const data: IUsername = {
      username: username,
    };
    try {
      axios(postCollect(allCollectsUsernameURL, data));
    } catch (error) {}
  }

  useEffect(() => {
    getAllCollects();
  }, []);

  return (
    <PageContainer>
      <CenterContent>
        <AllCollectsView />
      </CenterContent>
    </PageContainer>
  );
}

export default Collect;
