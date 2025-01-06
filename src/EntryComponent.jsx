function EntryComponent() {

  return(
    <section className="entrySection">
      <div className="entryGrid">
        <div className="gridImage">
          <img src="/src/assets/e143f205acb5ae4dc702b16f370e7994.png" alt="grid-image" />
          <div className="gridDetails">
          <div className="location">
            <img src="src/assets/Marker.png" alt="marker" />
            <span className="locationName">JAPAN</span>
            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank">View on Google Maps</a>
          </div>
          <div className="travelLocation">
            <span>Mount Fuji</span>
          </div>
          <div className="travelDates">
              <span>12 Jan, 2021 - 24 Jan, 2021</span>
          </div>
          <div className="travelDescription">
              <span>
              Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
              </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default EntryComponent
