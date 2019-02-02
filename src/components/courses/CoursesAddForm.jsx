import React from 'react';
import uid from 'uid';
import Calendar from './Calendar';
import MultiSelect from './MultiSelect';
import { categories, teachers } from '../../data';

import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './course-add.form.css'

const optionsTeachers = teachers.map(teacher => Object.assign({}, {label: teacher, value: teacher}))
const optionsCategories = categories.map(categorie => Object.assign({}, {label: categorie, value: categorie}))

const  CourseAddForm = props => (
  <form className="pure-form AddForm" onSubmit={props.onAddCourse}>
    <input type="hidden" name="id" value={uid(10)} />
    <input type="text" placeholder="Nombre del curso" name="name" />
    <input type="url" placeholder="poster" name="poster" />
    <input type="url" placeholder="web" name="url" />
    <input type="number" placeholder="cost" name="amount" />
    <MultiSelect
      name="teacher"
      placeholder="elige el profesor(es) del curso"
      options={optionsTeachers}
    />
    <MultiSelect
      name="categories"
      placeholder="elige la categoria del curso"
      options={optionsCategories}
    />
    <Calendar name="date" />
    <input type="hidden" name="id" value={uid(10)} />
    <input className="pure-button pure-button-primary" type="submit" value="Guardar" />
  </form>
);

export default CourseAddForm;
