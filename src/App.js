import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ImageContainer from "./components/imageContainer";
import axios from "axios";

import "./App.css";

//https://api.nasa.gov/planetary/apod


function App() {
  const [data, setData] = useState([]); //i forgot to initialize my data with a new empty array
  const [count, setCount] =useState(0);
    
  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=PGZGMrCnZwWQRecXqsROalxcmvyhygGql0iLL1Of`)
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










// import React, {useState, useEffect} from "react";
// import axios from "axios"
// import "./App.css";

// // API address = https://api.nasa.gov/planetary/apod

// function App() {
//   const [data, setData] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(()=> {
//     axios.get('https://api.nasa.gov/planetary/apod?api_key=PGZGMrCnZwWQRecXqsROalxcmvyhygGql0iLL1Of')
//     .then((res) => {
//       console.log('this is the Nasa API data: ', res);
//       setData(res.data);
//     })
//     .catch((err) => {
//       console.log('An ERROR has populated: ', err );
//     })

//   }, []);

 
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//       </p>
//     </div>
//   );
// }

// export default App;
