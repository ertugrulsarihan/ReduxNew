import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionsCourse from "../../redux/actions/actionsCourse";
import propTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { bindActionCreators } from "redux";

function CoursesPage(props) {
  const [courses, setCourses] = useState(null);
  const handleChange = (event) => {
    const newCourse = { ...courses, title: event.target.value, id: uuidv4() };
    setCourses(newCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.courses);
    props.actions.createCourse(courses);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    props.actions.deleteCourse(courses.id);
    console.log(props.courses);
  };

  /*
  useEffect(() => {
    console.log(props.courses);
  });
  */

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
            <button className="btn btn-primary" onClick={handleDelete}>
              Delete Course
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

CoursesPage.propTypes = {
  actions: propTypes.func.isRequired,
  courses: propTypes.array.isRequired,
};

function mapStateTopProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsCourse, dispatch),
  };
}

export default connect(mapStateTopProps, mapDispatchToProps)(CoursesPage);
