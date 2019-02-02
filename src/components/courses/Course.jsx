import React from 'react'

const Course = (props) => (
  <li className="CoursesList-item">
    <a className="CoursesList-link" href={props.url} target="_blank" rel="noopener noreferrer">
      <figure>
        <img src={props.poster} alt={props.name} />
        <figcaption>
          <h2>{props.name}</h2>
        </figcaption>
      </figure>
    </a>
    <section>
      <p>
        <i className="fa fa-graduation-cap"></i>
        {props.teacher}
      </p>
      <p>
        <i className="fa fa-calendar-o"></i>
        {props.date}
      </p>
      <p>
        <b>
          <i className="fa fa-dollar"></i>
          {props.amount}
        </b>
        <b>
          <i className="fa fa-key"></i>
          {props.id}
        </b>
      </p>
      <p>
        <i className="fa fa-tags"></i>
        {
          props.categories.map(
            (cat, index, arr) =>
              (index === arr.length - 1)
                ? cat
                : `${cat}, `
          )
        }
      </p>
    </section>
  </li>
)

export default Course