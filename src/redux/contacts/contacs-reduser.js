/** @format */
import { createReducer } from "@reduxjs/toolkit";
import allActions from "./contacts-actions";

const reducerFilter = createReducer("", {
  [allActions.filters]: (_, { payload }) => payload,
});

const allReducer = { reducerFilter };

export default allReducer;
