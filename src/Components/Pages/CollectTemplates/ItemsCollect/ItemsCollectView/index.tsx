import React from "react";
import {
  CenterContent,
  LineBreak,
  PageContainer,
  Spacer,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {GRADIENT} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";
import FieldView from "../../../../../Utils/Components/Views/FieldView";
import ImagePathView from "../../../../../Utils/Components/Views/ImagePathView";
import {useAppSelector} from "../../../../../Utils/Redux/ReduxHook";

function ItemsCollectView() {
  const collect = useAppSelector((state) => state.collect);
  return (
    <PageContainer>
      <CenterContent>
        <h2>{collect.title}</h2>
        <Spacer height="15px" />
        <LineBreak width="100%" bgColor={GRADIENT} />
        <Spacer height="30px" />
        <ImagePathView imagePath={collect.imagePath} />
        <Spacer height="30px" />
        <LineBreak width="100%" bgColor={GRADIENT} />
        <Spacer height="30px" />
        <FieldView fields={collect.collectForm} />
        <LineBreak width="100%" bgColor={GRADIENT} />
        <Spacer height="30px" />
      </CenterContent>
    </PageContainer>
  );
}

export default ItemsCollectView;
