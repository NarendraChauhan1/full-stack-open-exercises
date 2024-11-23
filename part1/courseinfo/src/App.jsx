const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
  
const Content = (props) => {
  return (
    <div>
    <Part part={props.lesson[0].name} exercises={props.lesson[0].exercises} />
    <Part part={props.lesson[1].name} exercises={props.lesson[1].exercises} />
    <Part part={props.lesson[2].name} exercises={props.lesson[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.lesson.reduce((accu, lesson) => accu + lesson.exercises, 0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const lesson = [
  { name : 'Fundamentals of React',
  exercises : 10},
  { name : 'Using props to pass data',
   exercises : 7},
  { name : 'State of a component',
   exercises : 14}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content lesson={lesson}/>
      <Total lesson={lesson}/>
    </div>
  )
}

export default App

