/** @format */

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3033";

export async function fetchConacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function fetchConactsPost(obj) {
  const { data } = await axios.post(`/contacts`, obj);
  return data;
}

export async function fetchConactsDelete(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
