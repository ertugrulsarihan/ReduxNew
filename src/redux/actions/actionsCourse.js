export function createCourse(courses) {
  return { type: "CREATE_COURSE", courses };
}

export function deleteCourse(courses) {
  return { type: "DELETE_COURSE", courses };
}
