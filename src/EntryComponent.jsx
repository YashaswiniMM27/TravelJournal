function Entry(props) {

  return(
    <section className="entrySection">
      <div className="entryGrid">
        <div className="gridImage">
          <img src={props.img} alt="grid-image" />
          <div className="gridDetails">
          <div className="location">
            <img src="src/assets/Marker.png" alt="marker" />
            <span className="locationName">{props.country}</span>
            <a href={props.googleLinks} target="_blank">View on Google Maps</a>
          </div>
          <div className="travelLocation">
            <span>{props.place}</span>
          </div>
          <div className="travelDates">
              <span>{props.date}</span>
          </div>
          <div className="travelDescription">
              <span>
              {props.description}
              </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Entry
