export interface IPatchItem {
  itemId: number;
  itemForm: string;
}

export interface IGetItem {
  itemId: number;
}

export interface IGetAllItem {
  collectId: number;
}

export interface IPostItem {
  collectId: number;
  title: string;
  itemForm: string;
}
export interface IItemForm {
  itemId: number;
  itemForm: string;
}
