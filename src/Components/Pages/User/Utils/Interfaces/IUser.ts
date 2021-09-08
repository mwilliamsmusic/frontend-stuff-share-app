export interface IUserCollectTag {
  collectId: number;
  tagName: string;
}
export interface IUserItemTag {
  itemId: number;
  tagName: string;
}
export interface IRemoveCollectTag {
  id: number;
  collectId: number;
}

export interface IRemoveItemTag {
  id: number;
  itemId: number;
}
