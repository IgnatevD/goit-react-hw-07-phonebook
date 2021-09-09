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

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filters"],
// };

// const persistRedusers = persistReducer(
//   contactsPersistConfig,
//   combineReducers({
//     contacts: allReducer.reducerContats,
//     filters: allReducer.reducerFilter,
//   })
// );

const store = configureStore({
  reducer: {
    contacts: allReducer.reducerContats,
    filters: allReducer.reducerFilter,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// const store = configureStore({
//   reducer: persistRedusers,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// const persistor = persistStore(store);
// const allStore = { store, persistor };

export default store;
