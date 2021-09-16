import { handleError, handleResponse } from "./apiUtils";
const baseurl = process.env.API.URL + "/authors/";

export function getAuthors() {
  return fetch(baseurl).then(handleResponse).catch(handleError);
}
