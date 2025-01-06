import { createRoot } from 'react-dom/client'
import './index.css'
import EntryComponent from './EntryComponent.jsx'
import Header from './header.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Header/>
        <EntryComponent />
    </>
)
