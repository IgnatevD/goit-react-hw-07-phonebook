/** @format */

import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { contactsFetch } from "./contacts-operation";
import allActions from "./contacts-actions";

const entris = createReducer([], {
  [allActions.fetchContactSucess]: (_, action) => action.payload,
});

const isLoding = createReducer(false, {
  [allActions.fetchContactRequest]: () => true,
  [allActions.fetchContactSucess]: () => false,
  [allActions.fetchContactError]: () => false,
});

const error = createReducer(null, {
  [allActions.fetchContactError]: (state, action) => action.payload,
  [allActions.fetchContactRequest]: () => null,
});

const contactsReduscer = combineReducers({
  entris,
  isLoding,
  error,
});

export default contactsReduscer;
