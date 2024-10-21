import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Receipt from './pages/Receipt'
import ListOfTransaction from './pages/ListOfTransaction'
import ListOfUsers from './pages/ListOfUsers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/receipt" element={<Receipt />} />
        <Route exact path="/transaction" element={<ListOfTransaction />} />
        <Route exact path="/users" element={<ListOfUsers />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
