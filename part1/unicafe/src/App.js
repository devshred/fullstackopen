import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({name, onClickEvent}) => {
  return(
    <button onClick={onClickEvent}>{name}</button>
  )
}

const Statistics = ({name, value}) => <div>{name} {value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const average = () => {
    const total = good + neutral + bad
    if(total > 0){
      return (good - bad) / total
    } else {
      return 'no values available'
    }
  }
  const positive = () => {
    const total = good + neutral + bad
    if(total > 0){
      const percentage = (good) / (good + neutral + bad) * 100
      return (<>{percentage} %</>)
    } else {
      return 'no values available'
    }
  }

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
      <Statistics name='all' value={good + neutral + bad} />
      <Statistics name='average' value={average()} />
      <Statistics name='positive' value={positive()} />
    </div>
  )
}

export default App
