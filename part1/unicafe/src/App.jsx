import { useState } from 'react'

const TitleText = ({text}) => <h1>{text}</h1>

const Sum = (newValue) => newValue((previousValue) => previousValue + 1)

const Button = ({eventHandler, text}) => <button onClick={eventHandler}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
      <td>{text}</td>
      <td>{value}</td>
      </tr>
      </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const Total = good + neutral + bad
  if (Total){
  return (
    <div>
      <table>
      <StatisticLine text={"good"} value={good}/>
      <StatisticLine text={"neutral"} value={neutral}/>
      <StatisticLine text={"bad"} value={bad}/>
      <StatisticLine text={"all"} value={Total}/>
      <StatisticLine text={"average"} value={(((good * 1) + (neutral * 0) + (bad * -1))/Total).toFixed(1)}/>
      <StatisticLine text={"positive"} value={((good/Total) * 100).toFixed(1) + "%"}/>  
      </table>
      </div> 
       )
}
else {
 return <p>No feedback given</p>
}
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <TitleText text={"give feedback"} />
    <Button eventHandler={() => Sum(setGood)} text={"good"}/>
    <Button eventHandler={() => Sum(setNeutral)} text={"neutral"}/>
    <Button eventHandler={() => Sum(setBad)} text={"bad"}/>
    <TitleText text={"statistics"} />
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App