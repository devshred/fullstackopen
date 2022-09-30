import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({name, onClickEvent}) => {
  return(
    <button onClick={onClickEvent}>{name}</button>
  )
}

const Statistics = ({name, value}) => <p>{name} {value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback' />
      <Button name='good' onClickEvent={increaseGood} />
      <Button name='neutral' onClickEvent={increaseNeutral} />
      <Button name='bad' onClickEvent={increaseBad} />
      
      <Header text='statistics' />
      <Statistics name='good' value={good} />
      <Statistics name='neutral' value={neutral} />
      <Statistics name='bad' value={bad} />
    </div>
  )
}

export default App
