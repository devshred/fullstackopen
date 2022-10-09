import React from "react"

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

const Note = ({note})=>{
    return (
      <li>{note.content}</li>
    )
  }

const Course = ({course}) => 
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>

export default Course
