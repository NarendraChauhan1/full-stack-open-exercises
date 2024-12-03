import { useState } from 'react'

const ParaText = ({text}) => <p>{text}</p>

const TitleText = ({text}) => <h1>{text}</h1>

const Sum = (newValue) => newValue((previousValue) => previousValue + 1)

const Button = ({eventHandler, text}) => <button onClick={eventHandler}>{text}</button>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Total = good + neutral + bad

  return (
    <div>
    <TitleText text={"give feedback"} />
    <Button eventHandler={() => Sum(setGood)} text={"good"}/>
    <Button eventHandler={() => Sum(setNeutral)} text={"neutral"}/>
    <Button eventHandler={() => Sum(setBad)} text={"bad"}/>
    <TitleText text={"statistics"} />
    <ParaText text={"good" + " " + good} />
    <ParaText text={"neutral" + " " + neutral} />
    <ParaText text={"bad"+ " " + bad} />
    <ParaText text={"all" + " " + Total} />
    <ParaText text={"average" + " " + ((good * 1) + (neutral * 0) + (bad * -1))/Total} />
    <ParaText text={"positive" + " " + (good/Total) * 100 + " " + "%"} />
    </div>
  )
}

export default App