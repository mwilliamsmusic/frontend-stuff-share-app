export interface IPatchItem {
  id: number;
  userId: number;
  collectId: number;
  title: string;
  form: string;
}

export interface IGetItem {
  id: number;
  userId: number;
}

export interface IGetAllItem {
  collectId: number;
  userId: number;
}

export interface IPostItem {
  userId: number;
  collectId: number;
  title: string;
  form: string;
}
