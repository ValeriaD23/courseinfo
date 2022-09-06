import Header from "./Header";
//import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const props1 = [part1, exercises1];
  const props2 = [part2, exercises2];
  const props3 = [part3, exercises3];

  return (
    <>
      <h1>
        <Header header={course} />
      </h1>
      <p>Course: {props1[0]}</p>
      <p>Exercises: {props1[1]}</p>
      <br/>
      <p>Course: {props2[0]}</p>
      <p>Exercises: {props2[1]}</p>
      <br/>
      <p>Course: {props3[0]}</p>
      <p>Exercises: {props3[1]}</p>
      <br/>
      <p>
      Total:
      <Total total={exercises1 + exercises2 + exercises3} />
    </p>
    </>
  );
};

export default App;
