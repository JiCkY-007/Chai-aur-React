import { useState } from 'react'
import React from 'react'
import { ReactDOM } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{background: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => console.log("red just clicked")}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{background:"red"}}
          >Red</button>
          <button
          onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{background: 'orange'}}
          >Orange</button>
          <button
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{background: 'yellow'}}
          >Yellow</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{background: 'green'}}
          >Green</button>
          <button
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{background: 'blue'}}
          >Blue</button>
          <button
          onClick={() => setColor('indigo')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'indigo'}}
          >Indigo</button>
          <button
          onClick={() => setColor('violet')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'violet'}}
          >Violet</button>
          
          </div>
      </div>
    </div>
    </>
  )
}

export default App
