import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  

  return (
    <UserContextProvider>
      {/* Ab yha hum jo bhi components bnayege uska direct access milega */}
     <h1>React Context API</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
