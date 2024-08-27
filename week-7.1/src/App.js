import { useContext, useState } from 'react';
import './App.css';
import { CountContext } from './context';
import { countAtom, evenSelector } from './store/atoms/count';
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  );
}

const CountRenderer = () => {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count}
    </div>
  )
}

const Count = () => {
  const count = useRecoilValue(countAtom)
  const even = useRecoilValue(evenSelector)
  return <div>
    <CountRenderer/>
    <Button />
    {even?"Even yaar":""}
  </div>
}

const Button = () => {
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count+1)
    }}>
      Increase
    </button>
    <button onClick={() => {
      setCount(count => count-1)
    }}>
      Decrease
    </button>
  </div>
}

export default App;
