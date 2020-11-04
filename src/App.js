import React, { useState, useEffect} from "react";
import Space from './components/spaceContainer'
import Header from './components/header'
import Footer from './components/footer'
import Title from './components/title'

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


  }, [])

    const likeApp = () => {
      return setCount(count + 1)
    }

  return (
    <div className="App">
      <header likeApp = {likeApp} numberOfLikes = {count} />
      <Space data = {data} />
      <footer />
    </div>
  );
}

export default App;
