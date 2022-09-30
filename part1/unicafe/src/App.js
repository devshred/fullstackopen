import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({name, onClickEvent}) => {
  return(
    <button onClick={onClickEvent}>{name}</button>
  )
}

const StatisticLine = ({name, value}) => <div>{name} {value}</div>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if(total == 0){
    return 'No feedback given'
  } else {
    const average = (good - bad) / total
    const positive = <>{(good) / total * 100} %</>
  
    return (
      <>
        <StatisticLine name='good' value={good} />
        <StatisticLine name='neutral' value={neutral} />
        <StatisticLine name='bad' value={bad} />
        <StatisticLine name='all' value={total} />
        <StatisticLine name='average' value={average} />
        <StatisticLine name='positive' value={positive} />
      </>
    )
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App