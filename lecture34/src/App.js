import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Todo from './Components/Todo/Todo';

function App() {
  const formSubmitHandler = (ev)=>{
    ev.preventDefault();
    console.log(ev);
  }

  const [val, setVal] = useState("home");

  return (
    <div className="App">
      <nav>
        <div onClick={()=>{setVal("home")}}>Home</div><br />
        <div onClick={()=>{setVal("about")}} >About</div><br />
        <div onClick={()=>{setVal("contact")}}>Contact</div>
      </nav>
      { val === 'home' && <Home />}
      { val  === 'about' && <About />}
      { val  === 'contact' && <Contact />}

      {/* <Todo /> */}
      {/* <form onSubmit={formSubmitHandler}>
        <input type="text" name="username" placeholder="Enter username"/> <br></br>
        <button type="submit">Click Me!</button>
      </form> */}
      
    </div>
  );
}

export default App;
