/** @format */

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import allActions from "./contacts-actions";
import {
  contactsFetch,
  contactsFetchDelete,
  contactsFetchPost,
} from "./contacts-operation";

const entris = createReducer([], {
  [contactsFetch.fulfilled]: (_, { payload }) => {
    return payload;
  },

  [contactsFetchPost.fulfilled]: (state, { payload }) => {
    return payload ? [...state, payload] : state;
  },

  [contactsFetchDelete.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoding = createReducer(false, {
  [contactsFetch.pending]: () => true,
  [contactsFetch.fulfilled]: () => false,
  [contactsFetch.rejected]: () => false,

  [contactsFetchPost.pending]: () => true,
  [contactsFetchPost.fulfilled]: () => false,
  [contactsFetchPost.rejected]: () => false,

  [contactsFetchDelete.pending]: () => true,
  [contactsFetchDelete.fulfilled]: () => false,
  [contactsFetchDelete.rejected]: () => false,
});

const error = createReducer(null, {
  [contactsFetch.rejected]: (state, action) => action.payload,
  [contactsFetch.fulfilled]: () => null,

  [contactsFetchPost.rejected]: (state, action) => action.payload,
  [contactsFetchPost.fulfilled]: () => null,

  [contactsFetchDelete.rejected]: (state, action) => action.payload,
  [contactsFetchDelete.fulfilled]: () => null,
});

const reducerFilter = createReducer("", {
  [allActions.filters]: (_, { payload }) => payload,
});

const contactsReduscer = combineReducers({
  entris,
  isLoding,
  error,
});

const allReducer = { contactsReduscer, reducerFilter };

export default allReducer;
