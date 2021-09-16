import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionsCourse from "../../redux/actions/actionsCourse";
import propTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function CoursesPage(props) {
  const [courses, setCourses] = useState(null);
  const handleChange = (event) => {
    const newCourse = { ...courses, title: event.target.value, id: uuidv4() };
    setCourses(newCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.courses);
    props.dispatch(actionsCourse.createCourse(courses));
  };

  useEffect(() => {
    console.log(props.courses);
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={(e) => handleChange(e)} />
        <input type="submit" />
        {props.courses.map((m) => (
          <div key={m.id}>
            <h5>{m.title}</h5>
          </div>
        ))}
      </form>
    </div>
  );
}

CoursesPage.propTypes = {
  dispatch: propTypes.func.isRequired,
  courses: propTypes.array.isRequired,
};

function mapStateTopProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateTopProps)(CoursesPage);
