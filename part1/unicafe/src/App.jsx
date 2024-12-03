import { useState } from 'react'

const TitleText = ({text}) => <h1>{text}</h1>

const Sum = (newValue) => newValue((previousValue) => previousValue + 1)

const Button = ({eventHandler, text}) => <button onClick={eventHandler}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const Total = good + neutral + bad
  if (Total){
  return (
    <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {Total}</p>
    <p>average {((good * 1) + (neutral * 0) + (bad * -1))/Total}</p>
    <p>positive {(good/Total) * 100} %</p>
    </div>
  )
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