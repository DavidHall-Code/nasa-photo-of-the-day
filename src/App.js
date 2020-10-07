import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";

// API address = https://api.nasa.gov/planetary/apod

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=PGZGMrCnZwWQRecXqsROalxcmvyhygGql0iLL1Of')
    .then((res) => {
      console.log('this is the Nasa API data: ', res);
      setData(res.data);
    })
    .catch((err) => {
      console.log('An ERROR has populated: ', err );
    })

  }, []);

 
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
