/** @format */
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const formSubmit = createAction("add_Contact", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction("delete_Contact");

const filters = createAction("filter_contact");

const allActions = { formSubmit, deleteContact, filters };

export default allActions;
