export interface AppProps {
  itemX?: ItemTypes;
  menuX?: ItemTypes[];
}

export interface ItemTypes {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  category: string;
  popular: boolean;
}
