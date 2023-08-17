import React from 'react'
import { GameHistoryPV } from '../contexts/GameHistory'
import GoToButton from './GoToButton'
import GameBox from './GameBox'

const ContentsBox = () => {
  return (
    <div className='content'>
      <GameHistoryPV>
        <GameBox />
        <GoToButton />
      </GameHistoryPV>
    </div>
  )
}

export default ContentsBox