/**
 * App.jsx
 * Componente principale dell'applicazione con routing
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import WebDeveloper from "./pages/WebDeveloper";
import Blender from "./pages/Blender";
import Photography from "./pages/ChristoferPhotography";
import Videodrone from "./pages/Videodrone";
import Stampa from "./pages/Stampa";
import Contact from "./pages/Contact";
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="WebDeveloper" element={<WebDeveloper />} />
          <Route path="Blender" element={<Blender />} />
          <Route path="Photography" element={<Photography />} />
          <Route path="Videodrone" element={<Videodrone />} />
          <Route path="Stampa" element={<Stampa />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
