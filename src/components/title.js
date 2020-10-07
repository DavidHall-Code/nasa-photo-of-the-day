import React from "react";
import "../index.css";
export default function Title(props) {
    const { title, copyright } = props;
    return(
        <div className="title-div">
            <h3>{title} by {copyright}</h3>
        </div>
    );
};