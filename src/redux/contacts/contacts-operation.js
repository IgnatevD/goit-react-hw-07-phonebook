/** @format */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as conactsAPI from "../../servis/contacts-API";

export const contactsFetch = createAsyncThunk(
  "/contacts/fetchContact",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await conactsAPI.fetchConacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsFetchPost = createAsyncThunk(
  "/contacts/contactsFetchPost",
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await conactsAPI.fetchConactsPost(contact);
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
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
