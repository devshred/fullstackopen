import React from "react"

const Header = ({ title }) => <h1>{title}</h1>

const SubHeader = ({ course }) => <h2>{course}</h2>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  parts.map(part => 
      <Part key={part.id} part={part} />
  )

const Total = ({parts}) => {
  const total = parts.reduce((total, current) => total + current.exercises, 0);

  return <b>total of {total} exercises</b>
}

const Course = ({course}) => 
    <div>
      <SubHeader course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

const Courses = ({courses}) => 
  courses.map(course => 
    <Course key={course.id} course={course} />
  )

export default Courses
