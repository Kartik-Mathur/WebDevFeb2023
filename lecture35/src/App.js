import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Faq from './components/Faq';

const navData = [
  "Home","Faq"
]

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        {/* {navData.map((t,indx)=><NavLink key={indx} className="navItem" to="/home">{t}</NavLink>)} */}
        <NavLink className="navItem" to="/home">Home</NavLink>
        <NavLink className="navItem" to="/faqs">Faq</NavLink>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} >
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/faqs" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
