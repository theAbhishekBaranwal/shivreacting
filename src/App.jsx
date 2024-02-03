import React, { useState } from 'react'
import Products from './Products'

function App() {
   var [a,b] = useState(69)
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
        <Products age="25" data={{age:25 ,name: "harsh"}}/>
    </div>
    <Products></Products>
  )
}

export default App

