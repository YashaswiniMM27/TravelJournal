import React from "react"
import Joke from "./Jokes.jsx"
import jokes from "./jokes.js"

function JokeApp(){
    return(
        <>
        {jokes.map((joke, index) => {
            return(<Joke
                key={index}
                {...joke}
            />
            )
        })
        }
        </>
    )
}

export default JokeApp