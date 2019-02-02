import React from 'react';
import Course from './Course'
import './course-list.css'


const CourseList = (props) => (
  <ul className="CoursesList">
    {
      props.courses.map(course => (
        <Course
          key={course.id}
          id={course.id}
          name={course.name}
          poster={course.poster}
          url={course.url}
          amout={course.amout}
          teacher={course.teacher}
          date={course.date}
          categories={course.categories}
        />
      )).reverse()
    }
  </ul>
)

export default CourseList;