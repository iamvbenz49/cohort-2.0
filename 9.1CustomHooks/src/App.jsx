import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
     <Component />
    </>
  )
}

const Component = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounted");
    return () => {
      setInterval(() => {setCount(count => count + 1)},3000)
    }
  }, [count])
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default App
