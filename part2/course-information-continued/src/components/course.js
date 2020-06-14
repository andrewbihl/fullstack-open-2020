import React from "react";

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
  const sum = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>
      <strong>Number of exercises: {sum}</strong>
    </p>
  );
};

export default Course