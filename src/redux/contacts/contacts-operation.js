/** @format */
// import { createAsyncThunk } from "@reduxjs/toolkit";
import allActions from "./contacts-actions";
import * as conactsAPI from "../../servis/contacts-API";

// export const contactsFetch = createAsyncThunk(
//   "/contacts",
//   async (state, rejectWithValue) => {
//     try {
//       const contacts = await conactsAPI.fetchConacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const contactsFetch = () => async (disp) => {
  disp(allActions.fetchContactRequest());
  try {
    const contacts = await conactsAPI.fetchConacts();
    disp(allActions.fetchContactSucess(contacts));
  } catch (error) {
    disp(allActions.fetchContactError(error));
  }
};

export const contactsFetchPost = (contact) => async (disp) => {
  disp(allActions.fetchContactRequest());
  try {
    const contacts = await conactsAPI.fetchConacts(contact);
    disp(allActions.fetchContactSucess(contacts));
  } catch (error) {
    disp(allActions.fetchContactError(error));
  }
};
