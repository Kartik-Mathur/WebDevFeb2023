import axios from 'axios';
import { useEffect, useRef } from 'react';
import './App.css';

const URL = (mypath)=>{
  return `http://localhost:4444/${mypath}`
}

function App() {
  const foodName = useRef("");
  const foodDescription = useRef("");
  const foodImageUrl = useRef("");

  useEffect(()=>{
    axios.get(URL('items'))
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err)
      })
  },[]);
  
  const formSubmitHandler = ()=>{

  }
  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Food Name"
          ref={foodName}
        /> <br />

        <input
          type="text"
          placeholder="Enter Food Description"
          ref={foodDescription}
        /> <br />

        <input
          type="text"
          placeholder="Enter Image Url"
          ref={foodImageUrl}
        /> <br />
      </form>
    </div>
  );
}

export default App;
