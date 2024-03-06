const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Course: {props.course}
      </h1>
    </div>
  )
}

const Part =(props)=>{
  return (
    <div>
      <p>{props.part.name},{props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  // Calculate the total number of exercises
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

  return (
    <div>
      Total number of exercises: {total}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App