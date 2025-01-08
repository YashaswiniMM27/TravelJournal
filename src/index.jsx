import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import JokeApp from './Jokes/JokeApp'

createRoot(document.getElementById('root')).render(
    <>
        <App/>
        {/* <JokeApp/> */}
    </>
)
