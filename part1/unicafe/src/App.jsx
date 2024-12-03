import { useState } from 'react'

const ParaText = ({text}) => <p>{text}</p>

const TitleText = ({text}) => <h1>{text}</h1>

const Sum = (newValue) => newValue((previousValue) => previousValue + 1)

const Button = ({eventHandler, text}) => <button onClick={eventHandler}>{text}</button>

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
    <ParaText text={"good" + " " + good} />
    <ParaText text={"neutral" + " " + neutral} />
    <ParaText text={"bad"+ " " + bad} />
    </div>
  )
}

export default App