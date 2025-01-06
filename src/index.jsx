import { createRoot } from 'react-dom/client'
import './index.css'
import Entry from './EntryComponent.jsx'
import Header from './header.jsx'
import japan from '/src/assets/mount-fuji.png'
import australia from '/src/assets/sydney.png'
import norway from '/src/assets/Geirangerfjord.png'

createRoot(document.getElementById('root')).render(
    <>
        <Header/>
        <Entry
        img={japan}
        country="JAPAN"
        place="Mount Fuji"
        date="12 Jan, 2023 - 24 Jan, 2023"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        googleLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        />
        <Entry
        img={australia}
        country="AUSTRALIA"
        place="Sydney Opera House"
        date="27 May, 2023 - 8 Jun, 2023"
        description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
        googleLink="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Entry
        img={norway}
        country="NORWAY"
        place="Geirangerfjord"
        date="01 Oct, 2024 - 18 Nov, 2024"
        description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        googleLink="https://www.google.com/maps/place/Geirangerfjord/@62.1044583,6.7457091,10z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        />
    </>
)
