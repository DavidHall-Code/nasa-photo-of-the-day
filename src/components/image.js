import React from "react";
import Title from "./title";
import Date from "./date";
import Description from "./Discription";
import "../index.css";




const ImageContainer = (props) => {
    const { data } = props;
    //console.log(props);
    return(
        <div className="image-div-container">
            <Title title={data.title} copyright={data.copyright} />
            <Date date={data.date} />
            <img src={data.hdurl} />
            <Description explanation={data.explanation} />
        </div>
    );
};
export default ImageContainer;