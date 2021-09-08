import axios from "axios";
import React, {Fragment} from "react";
import {useParams} from "react-router-dom";
import {ICollectId} from "../../../../Utils/basicInterfaces";
import {getCoolURL} from "../../../../Utils/URL/apiURL";
import {postCollect} from "../Utils/axiosCollectConfig";

interface RouteParams {
  collectId: string;
}

function ItemsCollect() {
  const {collectId} = useParams<RouteParams>();
  const id = parseInt(collectId, 10);

  async function getCool() {
    try {
      const data: ICollectId = {collectId: id};
      const cool = axios(postCollect(getCoolURL, data));
    } catch (error) {}
  }
  return <Fragment></Fragment>;
}

export default ItemsCollect;
