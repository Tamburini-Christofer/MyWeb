import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./layout/Layout";
import WebDeveloper from "./pages/WebDeveloper"
import Blender from "./pages/Blender"
import Photography from "./pages/ChristoferPhotography"
import Videodrone from "./pages/Videodrone"
import Stampa from "./pages/Stampa"
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="WebDeveloper" element={<WebDeveloper />} />
          <Route path="Blender" element={<Blender />} />
          <Route path="Photography" element={<Photography />} />
          <Route path="Videodrone" element={<Videodrone />} />
          <Route path="Stampa" element={<Stampa />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
