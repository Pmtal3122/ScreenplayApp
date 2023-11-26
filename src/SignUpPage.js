import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link,
    // Routes
} from "react-router-dom";
import noteContext from './context/notes/noteContext';

function SignUpPage() {
    let b = useContext(noteContext);
    console.log(b.state);

    const [fn, changeFn] = useState("");
    const [ln, changeLn] = useState("");
    const [em, changeEm] = useState("");
    const [ph, changePh] = useState("");
    const [pw, changePw] = useState("");

    const checkHeight = () => {
        const inp = Array.from(document.querySelectorAll(".slFormInputs"));
        inp.forEach((element) => {
            if(element.value !== "") {
                element.style.height = "30px";
                element.style.boxShadow = "0px 0px 30px rgb(23, 184, 184)";
                element.style.border = "2px solid rgb(23, 184, 184)";
                const sib = element.previousElementSibling;
                if(sib != null) {
                    sib.style.color = "rgb(23, 184, 184)";
                    sib.style.fontSize = "10px"
                }
            }
        })
    }

    const fnChange = (event) => {
        changeFn(event.target.value);
        checkHeight();
    }

    const lnChange = (event) => {
        changeLn(event.target.value);
        checkHeight();
    }

    const emChange = (event) => {
        changeEm(event.target.value);
        checkHeight();
    }

    const phChange = (event) => {
        changePh(event.target.value);
        checkHeight();
    }

    const pwChange = (event) => {
        changePw(event.target.value);
        checkHeight();
    }

    return (
        <div className="sl">
            <form action="http://localhost:8000/signUpData" method="post" className="slForm">
                <div className="slFormBlock">
                    <label htmlFor="fName">First Name</label>
                    <input type="text" name="fName" className="slFormInputs" value={fn} onChange={fnChange} autoComplete="off" />
                </div>

                <div className="slFormBlock">
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" name="lName" className="slFormInputs" value={ln} onChange={lnChange} autoComplete="off" />
                </div>

                <div className="slFormBlock">
                    <label htmlFor="email">Email ID</label>
                    <input type="email" name="email" id="email" className='slFormInputs' value={em} onChange={emChange} autoComplete="off" />
                </div>

                <div className="slFormBlock">
                    <label htmlFor="PhNo">Contact No</label>
                    <input type="text" name="Contact" id="Contact" className='slFormInputs' value={ph} onChange={phChange} autoComplete="off" />
                </div>

                <div className="slFormBlock">
                    <label htmlFor="Pwd">Password</label>
                    <input type="password" name="Pwd" id="Pwd" className='slFormInputs' value={pw} onChange={pwChange} />
                </div>

                <div className="slFormBlock">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
            <br />
            <Link to="/login">Go to login page</Link>
        </div>
    )
}

export default SignUpPage
