import axios from "axios";
import React, {useEffect} from "react";
import {useParams} from "react-router";
import {
  CenterContent,
  PageContainer,
} from "../../../../CSS/GlobalCSS/globalCSS";
import {IId} from "../../../../Utils/basicInterfaces";
import {
  IItem,
  updateItem,
} from "../../../../Utils/Redux/Modules/item/itemSlice";
import {useAppDispatch} from "../../../../Utils/Redux/ReduxHook";
import {itemDataURL} from "../../../../Utils/URL/apiURL";
import {postCollect} from "../Utils/axiosCollectConfig";
import ItemView from "./ItemView";
interface RouteParams {
  id: string;
}
function Item() {
  const {id} = useParams<RouteParams>();
  const itemId = parseInt(id, 10);
  const dispatch = useAppDispatch();

  async function getItem() {
    try {
      const data: IId = {id: itemId};
      const itemData = await axios(postCollect(itemDataURL, data));
      const item: IItem = itemData.data;
      dispatch(updateItem(item));
    } catch (error) {}
  }
  useEffect(() => {
    getItem();
  }, []);

  return (
    <CenterContent>
      <PageContainer>
        <ItemView />
      </PageContainer>
    </CenterContent>
  );
}

export default Item;
