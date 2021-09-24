import axios from "axios";
import React, {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";
import {
  CenterContent,
  PageContainer,
} from "../../../../CSS/GlobalCSS/globalCSS";
import {ICollectId, IId} from "../../../../Utils/basicInterfaces";
import {
  ICollect,
  updateCollect,
} from "../../../../Utils/Redux/Modules/collect/collectSlice";
import {
  IAllItems,
  updateAllItems,
} from "../../../../Utils/Redux/Modules/item/allItemsSlice";
import {useAppDispatch} from "../../../../Utils/Redux/ReduxHook";
import {
  allItemsURL,
  collectDataURL,
  getCoolURL,
} from "../../../../Utils/URL/apiURL";
import {postCollect} from "../Utils/axiosCollectConfig";
import ItemsCollectView from "./ItemsCollectView";

interface RouteParams {
  collectId: string;
}

function ItemsCollect() {
  const {collectId} = useParams<RouteParams>();
  const id = parseInt(collectId, 10);
  const dispatch = useAppDispatch();

  async function getCollection() {
    try {
      const data: IId = {id: id};
      const collectData = await axios(postCollect(collectDataURL, data));
      const collect: ICollect = collectData.data;
      dispatch(updateCollect(collect));
    } catch (error) {}
  }
  async function getAllItems() {
    try {
      const data: ICollectId = {collectId: id};
      const allItems = await axios(postCollect(allItemsURL, data));
      const items: Array<IAllItems> = allItems.data;
      dispatch(updateAllItems(items));
    } catch (error) {}
  }
  useEffect(() => {
    getCollection();
    getAllItems();
  }, []);
  return (
    <CenterContent>
      <PageContainer>
        <ItemsCollectView />
      </PageContainer>
    </CenterContent>
  );
}

export default ItemsCollect;
