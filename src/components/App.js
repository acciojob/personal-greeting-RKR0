
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name,setName] = useState();

  const changeName = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
        <p>Enter your name:</p>
        <input  value={name} onChange = {changeName} type="text"/>
        {name && <p>Hello {name}! </p>}
    </div>
  )
}

export default App
