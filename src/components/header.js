import React from "react";
import "../index.css";
import LikeImg from "./like_PNG48.png";
import NasaLogo from "../assets/nasaLogo.png";





const Header = (props) => {
    const { numberOfLikes, likeApp } = props;
    return(
      
            <Header>
                <div>
                    <a href="https://en.wikipedia.org/wiki/NASA"><img id="nasa-logo" alt="nasa-logo" src={NasaLogo} /></a>
                </div>
                <div className="app-title">
                    <h1>NASA's Photo Of The Day App</h1>
                   
                </div>
                <div className="likeButton-div">
                    <img onClick={likeApp} id="like-logo" alt="like-button" src={LikeImg} />
                    <p id="likes">You liked this app {numberOfLikes} times. </p>
                    <p id="thank-you">Thank you!</p>
                </div>
            </Header>
        
        );
}

export default Header;
