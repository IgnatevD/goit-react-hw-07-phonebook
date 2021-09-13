/** @format */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as conactsAPI from "../../servis/contacts-API";

let allContacts = [];

export const contactsFetch = createAsyncThunk(
  "/contacts/fetchContact",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await conactsAPI.fetchConacts();
      allContacts = [...contacts];
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsFetchPost = createAsyncThunk(
  "/contacts/contactsFetchPost",
  async (newContact, { rejectWithValue }) => {
    try {
      const arryFindName = allContacts?.find(
        (contact) =>
          contact?.name?.toLowerCase() === newContact.name.toLowerCase()
      );
      if (arryFindName) {
        alert(`Ошибка, контакт с данным именем ${newContact.name} уже есть`);
        return allContacts;
      }

      const contacts = await conactsAPI.fetchConactsPost(newContact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsFetchDelete = createAsyncThunk(
  "/contacts/contactsFetchDelete",
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await conactsAPI.fetchConactsDelete(id);
      allContacts = [...contacts];
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
