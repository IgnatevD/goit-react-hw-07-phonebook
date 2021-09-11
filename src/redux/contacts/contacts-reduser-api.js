/** @format */

import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  contactsFetch,
  contactsFetchDelete,
  contactsFetchPost,
} from "./contacts-operation";

const fnNewListContacts = (state, { payload }) => {
  const arryFindName = state.find(
    (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
  );
  if (arryFindName) {
    alert(`Ошибка, контакт с данным именем ${payload.name} уже есть`);
    return state;
  }
  return [...state, payload];
};

const entris = createReducer([], {
  [contactsFetch.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [contactsFetchPost.fulfilled]: (state, { payload }) => {
    return fnNewListContacts(state, { payload });
  },

  [contactsFetchDelete.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
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

const contactsReduscer = combineReducers({
  entris,
  isLoding,
  error,
});

export default contactsReduscer;
