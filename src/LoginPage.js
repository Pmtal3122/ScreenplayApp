import React, { useState } from 'react'
import axios from 'axios';
import {
    // BrowserRouter as Router,
    // Route,
    Link, redirect, useNavigate,
    // Routes
} from "react-router-dom";
import Homepage from './Homepage';
import { useContext } from 'react';
import noteContext from './context/notes/noteContext';
// import { useState } from 'react'

function LoginPage() {

    const loginContext = useContext(noteContext);

    const [eml, changeEml] = useState("");
    const [pw, changePw] = useState("");
    const [dt, changeDt] = useState({});
    const nav = useNavigate();

    const emlChange = (event) => {
        changeEml(event.target.value);
        checkHeight();
    }

    const pwChange = (event) => {
        changePw(event.target.value);
        checkHeight();
    }

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

    async function submitHandle(e) {
        // console.log("Inside submitHandle");
        // console.log(eml);
        // console.log(pw);
        e.preventDefault();
        await axios.post("http://localhost:8000/loginData", {
            eml,
            pw
        }).then(res=>{
            if(res.data==="LoginFailed") alert("Login Failed");
            else {

                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("Email", res.data['Email']);
                localStorage.setItem("Password", res.data['Password']);

                console.log("Res.Data: " + Object.keys(res.data));
                console.log("Res.Data: " + Object.values(res.data));
                changeDt(res.data);
                loginContext.upd(res.data);
                console.log("After Login, loginContext.state: " + Object.values(loginContext.state));
                console.log("Dt.values: " + Object.values(dt));
                return nav('/');
            }
        })
        .catch(e=>{

        })
    }

    return (
        <div className="sl">
            <form className="slForm" onSubmit={submitHandle}>
                <div className="slFormBlock">
                    <label htmlFor="email">Email ID</label>
                    <input type="email" name="email" className="slFormInputs" id="email" onChange={emlChange} value={eml} autoComplete="off"/>
                </div>
                {/* <br /> */}
                <div className="slFormBlock">
                    <label htmlFor="Pwd">Password</label>
                    <input type="password" name="Pwd" className="slFormInputs" id="Pwd" onChange={pwChange} value={pw} />
                </div>
                {/* <br /> */}
                <div className="slFormBlock">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default LoginPage
