import React from 'react'
import { useContext } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link, useNavigate,
    // Routes
} from "react-router-dom";
import noteContext from './context/notes/noteContext';
import LearnPage from './LearnPage';
import NavbarLogout from './NavbarLogout';

function Navbar() {
    let nbContext = useContext(noteContext);
    const nav = useNavigate();

    function handleSignOut() {
        if (localStorage.getItem("loggedIn") === "true") {
            localStorage.setItem("loggedIn", "false");
            localStorage.removeItem("Email");
            localStorage.removeItem("Password");
            nbContext.upd({});
            return nav('/');
        }
    }

    let loggedIn = "";
    let navbarContext = useContext(noteContext);
    if (Object.keys(navbarContext.state) != "") {
        // console.log("In navbar if block" + Object.keys(navbarContext.state) + "\n" + Object.values(navbarContext.state));
        loggedIn = "Sign Out";
    }

    function handleMouseover(ele) {
        ele.target.firstElementChild.style.color = "rgb(23, 184, 184)";
        ele.target.firstElementChild.style.textShadow = "0px 0px 10px rgb(23, 184, 184)";
        console.log(ele.target.firstElementChild);
    }

    function handleMouseout(ele) {
        ele.target.firstElementChild.style.color = "white";
        ele.target.firstElementChild.style.textShadow = "0px 0px 10px black";
    }

    return (
        <>
            <div className="navBar">
                <button>
                    <Link className="homePage navbar-links links" to="/">Screenplay-App</Link>
                </button>
                <button className="mx-4">
                    <Link to="/learn" className='navbar-links links' >Learn</Link>
                </button>
                {
                    loggedIn === "" ? <p></p> : <button>
                        <Link to="/editor" className='navbar-links links' >Editor</Link>
                    </button>
                }

                {/* <button className="logInSignUp">
            <span className="logIn">Log In</span>
        </button> */}
                <div className="logInSignUp">
                    {
                        loggedIn === "" ? <NavbarLogout /> : <button className="homePage navbar-links links" onClick={handleSignOut}>
                            <Link to="/" className="homePage navbar-links links">{loggedIn}</Link>
                        </button>
                    }
                </div>

            </div>
        </>
    )
}

export default Navbar
