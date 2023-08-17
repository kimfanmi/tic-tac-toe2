import { createContext, useState } from "react";

export const GameHistory = createContext();


export const GameHistoryPV = ({ children }) => {
  const victory = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  const [oxhistory, setOxhistory] = useState({ 0: [" ", " ", " ", " ", " ", " ", " ", " ", " "] });
  const [round, setRound] = useState(0);
  const victoryCheck = (state) => {
    return victory.filter(p => p.filter(q => checkOXary(state).X.includes(q + '')).length === 3).length > 0 ?
      "Winner : X" : victory.filter(p => p.filter(q => checkOXary(state).O.includes(q + '')).length === 3).length > 0 ? "Winner : O" : null;
  }
  const checkOXary = (state) => {
    let k = 1;
    let xary = [];
    let oary = [];
    state.map(p => { if (k === 10) k = 1; p === 'X' ? xary.push(k++ + '') : p === 'O' ? oary.push(k++ + '') : k++; return p; })
    return { O: oary, X: xary }
  }
  const value = { oxhistory, setOxhistory, round, setRound, victoryCheck, checkOXary };
  return (
    <GameHistory.Provider value={value}>
      {children}
    </GameHistory.Provider>
  )


}










