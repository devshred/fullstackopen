import React from "react"

const Header = ({ course }) => <h1>{course}</h1>

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

const Note = ({note}) => <li>{note.content}</li>

const Course = ({course}) => 
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

export default Course
