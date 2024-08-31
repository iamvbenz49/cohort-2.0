import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ backgroundColor: "red" }}>Hello</h1>
        <h1 style={{ backgroundColor: "blue" }}>Bye</h1>
        <h1 style={{ backgroundColor: "green" }}>Hello</h1>
      </div>
      <div className='flex justify-center'>
        <h1 className='bg-red-500'>Hello</h1>
        <h1 className='bg-blue-500'>Bye</h1>
        <h1 className='bg-green-500'>Hello</h1>
      </div>
      <div className='grid grid-cols-10'>
        <h1 className='bg-red-500 col-span-3'>Hello</h1>
        <h1 className='bg-blue-500 col-span-5'>Bye</h1>
        <h1 className='bg-green-500 col-span-2'>Hello</h1>
      </div>
      <h1 className='bg-green-500 md:bg-pink-500'>resize to make me green (md breakpoint)</h1>
      <h1>Assignment</h1>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <h1 className='bg-red-500 md:bg-pink-500'>Hello</h1>
        <h1 className='bg-blue-500 md:bg-pink-500'>Bye</h1>
        <h1 className='bg-green-500 md:bg-pink-500'>Hello</h1>
      </div>
    </>
  )
}

export default App
