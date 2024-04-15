import { useState } from "react"

function App() {
  
  const [color , setColor] = useState("pink")

  return (


   <div className=" w-full h-screen duration-900" style={{ backgroundColor : color}}> 

   {/* <h1 className=" flex  font-bold text-4xl text-center">This is BackGround Color Changer Project</h1> */}
    <div className="flex justify-center items-center h-screen">
      <p className="text-center font-bold text-4xl text-amber-400">This is BackGround Color Changer Project</p>
    </div>


   {/* Position of Bar Here we set the position */}
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    {/* Bar */}
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

    <button onClick={() => setColor("Red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>
      Red
    </button>

    <button onClick={() => setColor("Green")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}}>
      Green
    </button>

    <button onClick={() => setColor("Blue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}}>
      Blue
    </button>

    <button onClick={() => setColor("Lavender")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "lavender"}}>
      Lavender
    </button>

    <button onClick={() => setColor("Orange")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "Orange"}}>
      Orange
    </button>

    <button onClick={() => setColor("Purple")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "Purple"}}>
      Purple
    </button>

    <button onClick={() => setColor("Grey")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "Grey"}}>
      Grey
    </button>

    </div>

   </div>

   </div>
  )
}

export default App
