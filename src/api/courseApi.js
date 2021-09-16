import { func } from "prop-types";
import { handleError, handleResponse } from "./apiUtils";
const baseurl = process.env.API_URL + "/courses/";

export function getCourse() {
  return fetch(baseurl).then(handleResponse).catch(handleError);
}

export function saveCourse(course) {
  return (
    fetch(baseurl + course.id || ""),
    {
      method: course.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(course),
    }
  );
}
