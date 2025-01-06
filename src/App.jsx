import React from "react";
import Header from "./Header";
import Entry from "./EntryComponent.jsx";
import travelData from "./EntryData.js";

function App(){
    return (
        <>
        <Header/>
        {travelData.map((entry, index) => {
            return (<Entry
            key={index}
            entry={entry}
        />)
        })}
        </>
    )
}

export default App