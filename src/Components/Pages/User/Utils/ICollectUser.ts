export interface IPatchCollect {
  id: number;
  userId: number;
  collectForm: string;
  title: string;
}

export interface ICreateCollect {
  userId: number;
  title: string;
}

export interface IGetCollect {
  id: number;
  userId: number;
}

export interface IGetCollectAll {
  userId: number;
}
