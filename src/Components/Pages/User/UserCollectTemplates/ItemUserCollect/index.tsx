import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import TitlesDisplay from "./TitlesDisplay";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useRecoilState} from "recoil";
import {collectItemState} from "../../../../../Store/atoms";
import {ItemUserCollectAll} from "../axiosUserCollectConfig";

import {CenterContent, PageContainer} from "../../../../../CSS/globalCSS";
import {TransOverlay} from "../../userCSS";

interface RouteParams {
  id: string;
}

function ItemUserCollect() {
  const {id} = useParams<RouteParams>();
  let idString: string = id || "";
  const [collectItem, setCollectItem] = useRecoilState(collectItemState);

  const allItemUserCollect = () => {
    axios(ItemUserCollectAll(idString)).then(
      (res: AxiosResponse) => {
        setCollectItem(res.data);
      },
      (err: AxiosError) => {}
    );
  };
  useEffect(() => {
    allItemUserCollect();
  }, []);
  return (
    <CenterContent>
      <PageContainer>
        <TitlesDisplay />
      </PageContainer>
    </CenterContent>
  );
}

export default ItemUserCollect;
