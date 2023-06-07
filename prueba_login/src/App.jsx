import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Index from './components/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const [logued, setlogued] = useState(false)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              logued ?
                <Index
                  setlogued={setlogued}
                ></Index> :
                <Login
                  setemail={setemail}
                  setpassword={setpassword}
                  email={email}
                  password={password}
                  setlogued={setlogued}
                  logued={logued}
                ></Login>
            }
          />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
