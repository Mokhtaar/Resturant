import React from "react";
import Item from "../../Components/Item";
import { ItemActionType, ItemTypes } from "../../Types";

const Reducer = (state: ItemTypes[] = [], action: ItemActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
    {action.payload.num === 1? action.payload.num +=1: action.payload.num>0? action.payload.num-=1: action.payload.num=0}
    const productFind = state.find(
        (product: ItemTypes) => product.id === action.payload.item.id
      );
      if (!productFind) {
        if (action.payload.item) {
          return([...state, { ...action.payload.item, quantity: action.payload.num }]);
        }
      } else {
        state.map((product) => {
          if (product.id === action.payload.item.id) {
            product.quantity = action.payload.num;
          }
        });
        return(state)
      }
       break
    default:
      return state;
  }
};

export default Reducer;

// action.payload.quantity = 1;
// return [...state, action.payload];

// return state.map((item: CartTypes) => {

//     if (item.id === action.payload.id) {
//       return { ...item, quantity: item.quantity + 1 };
//     } else {        }
//   });


 // let item: any = action.payload
        // if (state.includes(item)) {
        //     let x: any = state.find(selectedItem => selectedItem.id === item.id)
        //     let y = state.indexOf(x)
        //     x.quantity += 1
        //     state.splice(y, 1, x)
        //     return state;
        // } else
        //    item.quantity = 1
        //  return state = [...state, item];
        //   return action.payload
        //   let x: any 
        //   return state.map((item: CartTypes) => {
        // if (item.id === action.payload.id) {
        //   item.quantity += 1;
        //  return [...state]; 
        // } else {
        //   if (state.length === 0) {
        //     action.payload.quantity = 1;
        //     return [action.payload];
        //   }
        //   else{
        //     action.payload.quantity = 1;
        //     return [...state,action.payload];
    //       }
    // //     }
    //   });