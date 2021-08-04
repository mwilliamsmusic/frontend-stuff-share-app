export interface IPatchCollect {
  collectId: number;
  collectForm: string;
  title: string;
}

export interface ICreateCollect {
  title: string;
}

export interface IGetCollect {
  collectId: number;
}
export interface IDeleteCollect {
  collectId: number;
}
export interface ICollectForm {
  collectId: number;
  collectForm: Array<IForm>;
}

export interface IForm {
  field: string;
  value: string;
}

export interface IUpdateCollectImage {
  collectId: number;
  image: string;
}
