import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Khushbu",
    age : 22
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className=' bg-red-400 shadow-lg  hover:text-teal-200  mb-4 rounded-lg hover:start-4' >Khushbu Mandal , SWE</h1>
      {/* <Cards mySelf="Khushbu" someObj = {myObj}/> */}
      {/* <Cards myself="Khushbu" someObj = {newArr}/> */}
      {/* We can also give in the form of variable also but use {} braces */}
      <Cards myself="Simran" btn = "Click Me->"/>
      <Cards myself="Khushbu" btn = "View Me->"/>
    </>
  )
}

export default App
