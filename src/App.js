import React, { useState, useEffect} from "react";
import Space from './spaceContainer'

import "./App.css";
import axios from "axios";

function App() {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  useEffect (() => {
    axios
      .get ('https://api.nasa.gov/planetary/apod?api_key=SboTt1nag1tEyLWthGglQu79e3tMpAx4avV9OGhR')
      .then ((res) => {
        console.log('This is the data from the API: ', res)
        setData(res.data)
      })
      .catch ((err) => {
        console.log('Ther was an ERROR: ', err)
      })


  })

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
