import { Routes, Route } from "react-router-dom"

import Navigation from "./routes/navigation/navigation.component"
import Auth from './routes/auth/auth.component'
import Home from "./routes/home/home.component"

import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { currentUser } from "./store/thunks/auth/currentUser"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(currentUser())
  }, [])

  return <Routes>
    <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
    </Route>
  </Routes>
}

export default App