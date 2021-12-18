import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [user, setUser] = useState("");
  useEffect(() =>{
    Axios.post("/api/user").then((response) => {
      if(response.data) {
        setUser(response.data[0]);
      } else {
        alert("failed to");
      }
    });
  },[]);
  return(
      <div className="App">
        <header className="App-header">
          <h1>{user.userId}</h1>
          <h1>{user.name}</h1>
          <h1>{user.gender}</h1>
          <h1>{user.regdate}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
  );
}
export default App;
