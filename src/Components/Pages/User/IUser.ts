interface IFoo {
  [key: string]: {}; // IFoo is indexable; not a new property
}

export interface UpdateCollect {
  id: number;
  userId: number;
  collectForm: any;
  // dir: any;
  // img: any;
  title: any;
}
