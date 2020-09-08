import React from "react";

const iState = {
  product: null,
  wish: [],
  detailData: [],
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        product: action.payload,
      };
    case "UPDATE_FAV":
      const newFav = {
        favProduct: action.payload,
        inCart: true,
      };

      const p = state.product.filter((item) => item.id == action.payload.id);
      const pro = state.product.filter((item) => item.id !== action.payload.id);
      console.log(p);
      p[0].inCart = true;
      console.log(p);
      console.log(state.product);
      const wishList = state.wish.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,

        wish: [...wishList, action.payload],
      };
    case "DETAIL_DATA":
      return {
        ...state,
        detailData: [action.payload],
      };
  }
  return state;
};
export default reducer;
