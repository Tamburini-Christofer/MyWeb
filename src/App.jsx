import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./layout/Layout";
import ChiSono from "./pages/ChiSono"
import Contatti from "./pages/Contatti"
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ChiSono" element={<ChiSono />} />
          <Route path="Contatti" element={<Contatti />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
