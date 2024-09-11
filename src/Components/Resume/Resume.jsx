import React from "react";
import './Resume.css'
import animechanImage from '../Assets/Animechan1.jpg';

export default function Resume(){
    return(
        <div className="reWrap">
            <img src= {animechanImage} alt="am" />
            <h1>Name : Tahsin Ashraf</h1> 
            <br></br>
            <p>Computer Science and Engineering Student at BracU </p>
            <br></br>
            <p>Skills : C++, React, Java </p>
            <br></br>
            <p>Devops : Github, Cmake</p>
            <br></br>
            <a href="https://github.com/SerialChiller-git"> Github </a>
            <a href="https://codeforces.com/profile/Serial_Chiller"> Codeforces </a>
        </div>
    );
}