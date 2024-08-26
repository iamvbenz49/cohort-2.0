import { useContext, useState } from 'react';
import './App.css';
import { CountContext } from './context';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountContext.Provider value={count}>
        <Count count = {count} setCount = {setCount}/>
      </CountContext.Provider>
    </div>
  );
}

const CountRenderer = () => {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

const Count = ({count, setCount}) => {
  return <div>
    <CountRenderer count={count}/>
    <Button setCount = {setCount} />
  </div>
}

const Button = ({setCount}) => {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>
      Increase
    </button>
    <button onClick={() => {
      setCount(count-1)
    }}>
      Decrease
    </button>
  </div>
}

export default App;
