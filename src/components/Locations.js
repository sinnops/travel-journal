export default function Locations(props){

  return (
    <section className="card">
        <div className="card--image">
          <img src={`../images/${props.item.imageUrl}`} />
        </div>
        <div className="card--content">
          <div className="card--location">
            <i class="fas fa-map-marker-alt card--location_pin"></i>
            <span className="card--location_country">{props.item.location}</span>
            <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h2>{props.item.title}</h2>
          <h3>{props.item.startDate} - {props.item.endDate}</h3>
          <p>{props.item.description}</p>
        </div>
    </section>
  )
}
