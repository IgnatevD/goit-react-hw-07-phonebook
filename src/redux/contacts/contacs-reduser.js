/** @format */
import { createReducer } from "@reduxjs/toolkit";
import allActions from "./contacts-actions";

// const reducerContats = createReducer([], {
//   [allActions.formSubmit]: (state, { payload }) => {
//     const arryFindName = state.find(
//       (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
//     );
//     if (arryFindName) {
//       alert(`Ошибка, контакт с данным именем ${payload.name} уже есть`);
//       return state;
//     }

//     return [...state, payload];
//   },
//   [allActions.deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

const reducerFilter = createReducer("", {
  [allActions.filters]: (state, { payload }) => payload,
});

const allReducer = { reducerFilter };

export default allReducer;
