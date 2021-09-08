import {IForm} from "../../../../../Utils/basicInterfaces";

type StockImage = "/stock/ssa.jpg";

export interface IPatchCollect {
  collectId: number;
  collectForm: string;
  title: string;
}

export interface ICreateCollect {
  title: string;
  // image: StockImage;
}

export interface ICollectForm {
  id: number;
  collectForm: Array<IForm>;
}

export interface IUpdateCollectImage {
  collectId: number;
  image: string;
}

export interface IImageRes {
  path: string | null;
}
