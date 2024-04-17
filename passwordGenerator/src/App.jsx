import { useCallback, useEffect, useState , useRef } from 'react'


function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  // we want to Generate the Password by its own when we refresh ths page
  // const passwordGenerator = () => {}

  // useCallback
  // const passwordGenerator  = useCallback (fn , [length , numberAllowed , charAllowed , setPassword])

  const passwordGenerator = useCallback(() => {
    // jo generated password hoga vo set kr dege
    let pass = "";
    // String me data aayega jise hum password bnayege
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // if Number is allowed in passwordGenerator similarly for characters
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`+=-_"

    for (let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  } , [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback (() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange (0,100)

    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800'>

        <h1 className=' text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow  overflow-hideen mb-4 rounded-xl'>

          {/* input ke andar properties likhni hai */}
          <input
          type='text'
          value={password}
          className="outline-none w-full py-1 px-3 rounded-l-lg"
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'> 
          <div className='flex items-center gap-x-1'>

            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(event) => {setLength(event.target.value)}}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
