import React, { useState } from "react";
import { connect } from "react-redux";
const [courses, setCourses] = useState({
  title: "",
});
function CoursesPage() {
  const handleChange = (event) => {
    const course = { ...courses, title: event.target.value };
    setCourses(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(courses.title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={(e) => handleChange(e)} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CoursesPage;
