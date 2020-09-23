import React, { useState, useEffect } from "react";
import Header from "./components/header.js";
import Footer from "./components/footer";
import ImageContainer from "./components/imageContainer";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Title from "./components/title.js";
//https://api.nasa.gov/planetary/apod
function App() {
const [data, setData] = useState([]); //i forgot to initialize my data with a new empty array
const [count, setCount] =useState(0);
 useEffect(() => {
axios
 .get(`https://api.nasa.gov/planetary/apod?api_key=8gZ0HFrcH5a841VeVZoiCtlUr6qEKO2KkQtvZYKb`)
 .then((res) => {
   console.log('this is data from API: ', res);
   setData(res.data);
   //console.log(data); -- in here this is empty..?
 })
 .catch((err) => {
   console.log('this is an error: ', err);
 })
 
}, []);
//console.log(data); -- if i log this here when ever i get to click the like button it gives me an infinit loop, my data updates each time i click the button...

const likeApp = () => {
  return setCount(count + 1);
};

  return (
    <div className="App">
      <Header likeApp={likeApp} numberOfLikes={count} />
      <ImageContainer data={data} />
      <Footer />
    </div>
  );
}

export default App;