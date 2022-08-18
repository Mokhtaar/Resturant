import { ItemTypes } from "../../Types";

export const addToCart = (item: ItemTypes, num: number) => {   //actionName ex: depositMoney
  return {
    type: "ADD_TO_CART", //x is the action type I created in the reducer
    payload: {item, num},
  };
};

export const menuAction = (item?: ItemTypes) => {   //actionName ex: depositMoney
    return {
      type: "MENU", //MENU is the action type I created in the reducer
      payload: item, // (amount to be deposited 1000)
    };
  };

