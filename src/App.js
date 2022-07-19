import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const input = useRef();
  const [name, setName] = useState();

  const storeCookie = async () => {
    try {
      const name = input.current.value;
      const { data } = await axios.post("/new", { name }, { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  }

  const getCookie = async () => {
    try {
      const { data } = await axios.get("/name", { withCredentials: true });
      console.log(data)
      setName(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className="form">
        <p>{name}</p>
        <label htmlFor="input">UserName</label>
        <input ref={input} className="id" />
        <button onClick={storeCookie}>Store Cookie</button>
        <button onClick={getCookie}>Retrive Cookie</button>
      </div>
    </div>
  );
}

export default App;