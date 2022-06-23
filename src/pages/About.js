import React, { Component } from 'react';
import "./About.css";
import aboutMe from "../assets/aboutMe.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here
            src={aboutMe}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title"><h2>Allison Oseguera</h2></div>
          <div className="brief_description">
            <p>I am a rising junior at the University of Southern California. I am majoring in Intelligence and Cyber Operation and minoring in Computer Programming. On my free time I love to paint and go hiking. I'm a big animal lover and enjoy spending time with my pets.</p>
            
          </div>
        </div>
      </div>
    </div>
  
   
    )
  }
}

