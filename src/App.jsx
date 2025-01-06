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
            img={entry.img}
            country={entry.country}
            place={entry.place}
            date={entry.date}
            description={entry.description}
            googleLink={entry.googleLink}
        />)
        })}
        </>
    )
}

export default App