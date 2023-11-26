import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [state, updateState] = useState({});
    // const [scr, setScr] = useState("");
    let scr = "";
    const upd = (updVar) => {
        updateState(updVar);
    }
    // const changeScr = (inText) => {
    //     setScr(inText);
    // }
    return(
        <NoteContext.Provider value={{state, upd, scr}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;