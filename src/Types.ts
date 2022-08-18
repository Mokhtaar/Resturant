export interface AppProps {
  itemX?: ItemTypes;
  menuX?: ItemTypes[];
}

export interface ItemTypes {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  category?: CategoryType;
  popular?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  orderlines?: [];
  quantity?: number
}

// export interface CartTypes {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   category: CategoryType;
//   popular: boolean;
//   createdAt: Date;
//   updatedAt: Date;
//   orderlines: [];
// }

export interface CategoryType {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface StateType {
  Reducer: ItemTypes[];
}

export interface ItemActionType {
  type: string
  payload: {item: ItemTypes, num: number}
}
