import React, { useContext, useEffect, useState } from 'react'
import { GameHistory } from '../contexts/GameHistory'

const GameBox = () => {
  const context = useContext(GameHistory);
  const [next, setNext] = useState('X');
  const onclick = (e) => {
    if (next.indexOf('Winner') >= 0) {
      return;
    }
    let newoxh = context.oxhistory;
    if (Object.keys(context.oxhistory).length - 1 !== context.round) {
      newoxh = {};
      for (let i = 0; i <= context.round; i++) {
        newoxh = { ...newoxh, [i]: context.oxhistory[i] }
      }
    }
    let ary = [];
    let myx = context.checkOXary(context.oxhistory[context.round]).X;
    let myo = context.checkOXary(context.oxhistory[context.round]).O;
    next === 'X' ? myx.push(e.target.className) : myo.push(e.target.className);
    for (let i = 0; i < 9; i++) {
      myx.indexOf((i + 1) + '') >= 0 ? ary.push('X') : myo.indexOf((i + 1) + '') >= 0 ? ary.push('O') : ary.push(' ');
    }
    context.setOxhistory({ ...newoxh, [context.round + 1]: ary });
    context.setRound(context.round + 1);
  };

  useEffect(() => {
    let cv = context.victoryCheck(context.oxhistory[context.round]);
    cv ? setNext(cv) : context.checkOXary(context.oxhistory[context.round]).X.length - context.checkOXary(context.oxhistory[context.round]).O.length === 0 ? setNext('X') : setNext('O');
  }, [context.round]);

  let j = 1;
  return (
    <div>
      <div className='gamebox'>
        {context.oxhistory[context.round].map(p => {
          if (j === 10) j = 1;
          return (<div key={j} className={j++} onClick={p === ' ' ? onclick : null}>{p}</div>)
        })}
      </div>
      <div className='gamestate'>
        <p>{next.includes('Winner') ? next : 'Next : ' + next}</p>
        <p>{'Round : ' + context.round}</p>
        <p>
          <button disabled={context.round === 0} onClick={(e) => {
            context.setRound((context.round - 1) / 1);
          }}>이전으로</button>
          <button disabled={context.round === Object.keys(context.oxhistory).length - 1} onClick={(e) => {
            context.setRound((context.round + 1) / 1);
          }}>다음으로</button>
        </p>
        <p></p>
      </div>
    </div>
  )
}

export default GameBox