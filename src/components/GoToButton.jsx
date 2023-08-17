import React, { useContext } from 'react'
import { GameHistory } from '../contexts/GameHistory'

const GoToButton = () => {
  const context = useContext(GameHistory);
  let k = 1;
  return (
    <ol>
      {Object.keys(context.oxhistory).length > 0 ? Object.keys(context.oxhistory).map(p => {
        return (<li key={p}><button onClick={(e) => {
          context.setRound(p / 1);
        }}>Go to {p / 1 === 0 ? 'Game Start' : '#' + p}</button></li>)
      }) : <li></li>}
    </ol>
  )
}

export default GoToButton