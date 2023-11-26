import React, { useEffect } from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import noteContext from './context/notes/noteContext';
import axios from 'axios'
import { Tilt } from 'react-tilt';
import TextEditor from './TextEditor';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './homePageCarousel.css';

function Homepage() {
  const a = useContext(noteContext);
  // console.log("Homepage Context: " + Object.values(a.state));
  const [left, changeLeft] = useState("0");
  const [right, changeRight] = useState("0");

  async function getData(eml, pw) {
    await axios.post("http://localhost:8000/loginData", {
      eml,
      pw
    }).then(res => {
      if (res.data === "LoginFailed") alert("Login Failed");
      else {
        console.log("Res.Data: " + Object.keys(res.data));
        console.log("Res.Data: " + Object.values(res.data));
        a.upd(res.data);
        console.log("After Login, loginContext.state: " + Object.values(a.state));
      }
    })
      .catch(e => {

      })
  }

  useEffect(() => {
    console.log("LocalStorage login: " + localStorage.getItem("loggedIn"));
    if (localStorage.getItem("loggedIn") === "true") {
      console.log("Inside If Block on Homepage");
      let eml = localStorage.getItem("Email");
      let pw = localStorage.getItem("Password");
      getData(eml, pw);
    }

  }, []);

  let print = "";
  if (a.state !== {}) {
    console.log(print);
    print = a.state['FirstName'];
  }


  return (
    <>
      <div className="welcome">
        WELCOME TO APP
      </div>
      <Carousel>
        <div>
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg" alt="" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698451200&semt=ais" alt="" />
        </div>
      </Carousel>

      {/* <TextEditor /> */}
    </>
  )
}

export default Homepage
