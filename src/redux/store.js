/** @format */

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import allReducer from "../redux/contacts/contacs-reduser";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filters"],
};

const persistRedusers = persistReducer(
  contactsPersistConfig,
  combineReducers({
    contacts: allReducer.reducerContats,
    filters: allReducer.reducerFilter,
  })
);

const store = configureStore({
  reducer: persistRedusers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);
const allStore = { store, persistor };

export default allStore;
