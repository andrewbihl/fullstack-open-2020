import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
    },
    {
      name: "CPR Training",
      parts: [
        {
          name: "Handling the situation",
          exercises: 6,
        },
        {
          name: "Compressions and breaths",
          exercises: 4,
        },
        {
          name: "Children and infants",
          exercises: 3,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map(c => <Course course={c} key={c.name} />)} 
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = ({ course }) => {
  const sum =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return <p>Number of exercises {sum}</p>;
};

ReactDOM.render(<App />, document.getElementById("root"));
