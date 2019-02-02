import React, { Component } from 'react';
import Courses from '../../courses/';

class DashboardCourses extends Component {
  render() {
    return (
      <article className="Main-container">
        <Courses />
      </article>
    );
  }
}

export default DashboardCourses;
