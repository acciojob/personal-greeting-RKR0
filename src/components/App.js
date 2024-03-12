
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name,setName] = useState();

  const changeName = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
       <div>
        <label>Enter your name:</label>
        <input  value={name} onChange = {changeName} type="text"/>
        <p></p>
    </div>
     {name && <p>Hello {name}!</p>}
     </div>
  )
}

export default App
