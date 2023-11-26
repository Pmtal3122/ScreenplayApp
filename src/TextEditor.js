import React, { useEffect } from 'react'
import { useContext } from 'react';
import noteContext from './context/notes/noteContext';
import './textEditorStyle.css'
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import { useRef } from 'react';

export default function TextEditor() {
    let currEle;
    let ins;
    let textContext = useContext(noteContext);
    let scriptNameRef = useRef();
    let saved;
    let secretRef = useRef();

    useEffect(() => {
        if (textContext.state !== {}) {
            let scr = textContext.state.Script;
            console.log("Script in TextEditor is: " + scr);
            document.getElementById("editor").innerHTML = scr;
            saved = true;
        }

        currEle = document.querySelector(".active");
        console.log("currEle in TextEditor: " + currEle);
        ins = document.getElementById("instructions");
        changeIns(currEle);
        // if (textContext.scr !== "") {
        //     document.getElementById("editor").innerHTML = textContext.scr;
        //     let act = document.querySelector(".active").innerText;
        //     console.log("After re-render, active block innertext: " + act);
        //     let pos = act.indexOf("|");
        //     console.log("Position of |" + pos);
        //     console.log(act.slice(0, 1));
        //     document.querySelector(".active").innerText = act.slice(0, pos) + act.slice(pos + 1); //Focus on this statement
        // }
    }, []);

    function generatePdfFunc() {
        let orgText = currEle.innerText;
        let pos = currEle.innerText.indexOf("|");
        currEle.innerText = currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1);
        let edit = document.getElementById("editor");
        let name = scriptNameRef.current.value;
        name.concat('.pdf');
        const pdfOptions = {
            margin: 10,
            filename: name,
            // image: {type: 'jpeg', quality: 0.98},
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf()
            .from(edit)
            .set(pdfOptions)
            .save()
            .then(() => {
                currEle.innerText = orgText;
            })
    }

    function handleSecret() {
        // console.log(secretRef.current);
        secretRef.current.style.opacity = "1";
        secretRef.current.style.top = "50px";
    }
    function handleSecretOut() {
        secretRef.current.style.opacity = "0";
        secretRef.current.style.top = "30px";
    }

    function changeIns() {
        ins.innerText = "";
        if (currEle.classList.contains("action")) {

            if (currEle.innerText == "|") {
                let i1 = document.createElement("div");
                i1.innerText = "Tab: Character";
                let i2 = document.createElement("div");
                i2.innerText = "Enter: Scene Heading";
                ins.appendChild(i1);
                ins.appendChild(i2);
            }
            else {
                let i1 = document.createElement("div");
                i1.innerText = "Tab: Character";
                let i2 = document.createElement("div");
                i2.innerText = "Enter: Action";
                ins.appendChild(i1);
                ins.appendChild(i2);
            }
        }
        else if (currEle.classList.contains("dialogue")) {
            let i1 = document.createElement("div");
            i1.innerText = "Tab: Action";
            let i2 = document.createElement("div");
            i2.innerText = "Enter: Character";
            ins.appendChild(i1);
            ins.appendChild(i2);
        }
        else if (currEle.classList.contains("character")) {
            let i1 = document.createElement("div");
            i1.innerText = "Tab: Action";
            let i2 = document.createElement("div");
            i2.innerText = "Enter: Dialogue";
            ins.appendChild(i1);
            ins.appendChild(i2);
        }
        else if (currEle.classList.contains("heading")) {
            let i1 = document.createElement("div");
            i1.innerText = "Tab: Character";
            let i2 = document.createElement("div");
            i2.innerText = "Enter: Action";
            ins.appendChild(i1);
            ins.appendChild(i2);
        }
    }

    const checkIfSaved = () => {
        if (saved === true) {
            document.querySelector(".savedStatus").innerText = "Not Saved [Ctr+s to save]";
            saved = false;
        }
    }

    const handleKeyDown = async (e) => {
        console.log(("Inside handleKeyDown"));
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            let pos = currEle.innerText.indexOf("|");
            let text = currEle.innerText;
            let len = text.length;
            if (pos > 0) {
                currEle.innerText = text.slice(0, pos - 1) + "|" + text.slice(pos - 1, pos) + text.slice(pos + 1);
            }
            else if (pos === 0) {
                let temp = currEle.previousElementSibling;
                if (temp != null) {
                    currEle.innerText = currEle.innerText.slice(1);
                    currEle.classList.remove("active");
                    temp.classList.add("active");
                    temp.innerText += "|";
                    currEle = temp;
                    changeIns(currEle);
                }
            }
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            let temp = currEle.previousElementSibling;
            let pos = currEle.innerText.indexOf("|");
            if (temp != null) {
                currEle.innerText = currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1);
                temp.innerText += "|";
                currEle.classList.remove("active");
                temp.classList.add("active");
                currEle = temp;
                changeIns(currEle);
            }
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            let temp = currEle.nextElementSibling;
            let pos = currEle.innerText.indexOf("|");
            if (temp != null) {
                currEle.innerText = currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1);
                temp.innerText += "|";
                currEle.classList.remove("active");
                temp.classList.add("active");
                currEle = temp;
                changeIns(currEle);
            }
        }
        else if (e.key === "ArrowRight") {
            e.preventDefault();
            let pos = currEle.innerText.indexOf("|");
            let text = currEle.innerText;
            let len = text.length;
            if (pos < len - 1)
                currEle.innerText = text.slice(0, pos) + text.slice(pos + 1, pos + 2) + "|" + text.slice(pos + 2);
            else {
                let temp = currEle.nextElementSibling;
                if (temp != null) {
                    currEle.innerText = currEle.innerText.slice(0, len - 1);
                    currEle.classList.remove("active");
                    temp.classList.add("active");
                    temp.innerText = "|" + temp.innerText;
                    currEle = temp;
                    changeIns(currEle);
                }
            }
        }
        else if (e.key === "End") {
            e.preventDefault();
            let pos = currEle.innerText.indexOf("|");
            currEle.innerText = currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1) + "|";
        }
        else if (e.key === "Home") {
            e.preventDefault();
            let pos = currEle.innerText.indexOf("|");
            currEle.innerText = "|" + currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1);
        }
        else if (e.key === "s" && e.ctrlKey) {
            e.preventDefault();
            console.log("Save");
            let pos = currEle.innerText.indexOf("|");
            let inText = document.getElementById("editor").innerHTML;
            textContext.scr = inText;
            let em = textContext.state.Email;
            let prevObj = textContext.state;
            prevObj.Script = inText;
            console.log("New prevobj: " + prevObj);
            textContext.upd(prevObj);
            console.log("After updating state: " + textContext.state);
            document.querySelector(".savedStatus").innerText = "Saved";
            saved = true;
            await axios.post("http://localhost:8000/editor", { inText, em })
                .then((res) => {
                    // console.log("The response data after saving in TextEditor");
                    // console.log(res.data);
                    currEle = document.querySelector(".active");
                    console.log("After saving, currEle");
                    console.log(currEle);
                })
                .catch((err) => {
                    console.log("Error: " + err);
                })
        }
        else if (e.key === "g" && e.ctrlKey) {
            e.preventDefault();
            console.log("Value of scr");
            console.log(textContext.state.Script);
            generatePdfFunc();
        }
        else if (e.key == "Enter") {
            console.log("Enterred");
            currEle.classList.remove("active");
            let pos = currEle.innerText.indexOf("|");
            let carry = currEle.innerText.slice(pos);
            console.log(carry);
            currEle.innerText = currEle.innerText.slice(0, pos);
            let newEle = document.createElement("p");
            if (currEle.classList.contains("character")) {
                newEle.classList.add("dialogue");
            }
            else if (currEle.classList.contains("action") && currEle.innerText.length === 0) {
                currEle.remove();
                newEle.classList.add("heading");
            }
            else if (currEle.classList.contains("dialogue")) {
                newEle.classList.add("character");
            }
            else newEle.classList.add("action");
            newEle.classList.add("active");
            console.log("New element: " + newEle.classList);
            let edit = document.getElementById("editor");
            edit.appendChild(newEle);
            currEle = newEle;
            currEle.innerText = carry;
            console.log("Last element: " + currEle.classList);
            changeIns(currEle);
        }
        else if (e.key == "Tab") {
            e.preventDefault();
            if (currEle.classList.contains("character")) {
                currEle.classList.remove("character");
                currEle.classList.add("action");
            }
            else {
                currEle.classList = [];
                currEle.classList.add("character");
                currEle.classList.add("active");
            }
            changeIns(currEle);
        }
        else if (e.key == "Backspace") {
            let content = currEle.innerText;
            if (content.indexOf("|") === 0) {
                let prevEle = currEle.previousElementSibling;
                prevEle.classList.add("active");
                let text = currEle.innerText;
                currEle.remove();
                currEle = prevEle;
                currEle.innerText += text;
                changeIns(currEle);
            }
            else {
                let text = currEle.textContent;
                let pos = text.indexOf("|");
                if (pos > 0) {
                    currEle.textContent = text.slice(0, pos - 1) + "|" + text.slice(pos + 1);
                    changeIns(currEle);
                }
            }
        }
        else {
            if (e.key != "Shift" && e.key != "CapsLock" && e.key != "Control" && e.key != "Alt" && e.key != "Tab" && e.key != "ArrowLeft" && e.key !=="|") {
                let text = currEle.textContent;
                let pos = text.indexOf("|");
                currEle.textContent = text.slice(0, pos) + e.key + "|" + text.slice(pos + 1);
                changeIns(currEle);
            }
        }
        checkIfSaved();
    }

    const handleMouseDown = (e) => {
        if (e.target.id !== "editor") {
            let temp = e.target;
            console.log("On mousedown, target: " + temp);
            let tempLeft = temp.getBoundingClientRect().left;
            let len = temp.innerText.length;
            let upperBound = 0;
            /*console.log(len);*/
            for (let i = 0; i < len; i++) {
                let letter = temp.innerText[i];
                const span = document.createElement("span");
                span.innerText = letter;
                temp.appendChild(span);
                if (letter == ' ') tempLeft += 3.5;
                else {
                    const rect = span.getBoundingClientRect().width;
                    tempLeft += rect;
                }
                /*console.log(temp.innerText[i] + " " + tempLeft);*/
                span.remove();
                if (tempLeft > e.screenX) break;
                upperBound++;
            }
            /*console.log("UpperBound: " + upperBound);*/

            if (temp === currEle) {
                /*console.log("Same!");*/
                let pos = currEle.innerText.indexOf("|");
                if (pos < upperBound) {
                    currEle.innerText = currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1, upperBound) + "|" + temp.innerText.slice(upperBound);
                }
                else
                    currEle.innerText = currEle.innerText.slice(0, upperBound) + "|" + temp.innerText.slice(upperBound, pos) + temp.innerText.slice(pos + 1);
            }
            else {
                temp.classList.add("active");
                currEle.classList.remove("active");
                temp.innerText = temp.innerText.slice(0, upperBound) + "|" + temp.innerText.slice(upperBound);
                let pos = currEle.innerText.indexOf("|");
                currEle.innerText = currEle.innerText.slice(0, pos) + currEle.innerText.slice(pos + 1);
                currEle = temp;
                changeIns(currEle);
            }
        }
        checkIfSaved();
    }

    return (
        <>
            <div className="textEditorHead">
                <div className="scriptName">
                    <label htmlFor="scriptN">Name of the Script:</label>
                    <input type="text" name="scriptN" id="scriptN" ref={scriptNameRef} autoComplete="off"/>
                    <div className="TEHButton">
                        <button id='scriptPDF' onClick={generatePdfFunc} onMouseMove={handleSecret} onMouseOut={handleSecretOut}>Generate PDF</button>
                    </div>
                    <div className="secretSave" ref={secretRef}>Shortcut: Ctrl+G</div>
                </div>
                <div className="savedStatus">
                    Saved
                </div>
            </div>
            <div className='container'>
                <div id="editor" onMouseDown={handleMouseDown} onKeyDown={handleKeyDown} tabIndex="0">
                    {/* We have to add tabIndex for a div to handle mousedown and keydown */}
                    <p className="heading">int. home - dawn</p>
                    <p className="action">
                        I woke up from my deep slumber.
                    </p>
                    <p className="character active">alic|e</p>
                </div>
            </div>
            <div id="instructions"></div>
        </>
    )
}
