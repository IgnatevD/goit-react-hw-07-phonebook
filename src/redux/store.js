/** @format */

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import allReducer from "../redux/contacts/contacs-reduser";
import contactsReduscer from "./contacts/contacts-reduser-api";

const store = configureStore({
  reducer: {
    contacts: contactsReduscer,
    filters: allReducer.reducerFilter,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
