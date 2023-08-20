import mapIcon from '../assets/mapIcon.png'
import './PlaceVisited.css'

export default props => {
  return (
    <div className='place'>
      <img src={props.imageUrl}/>
      <div className='place__place-info'>
        <div className='place__place-location'>
          <img src={mapIcon}/>
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='place__place-title'>{props.title}</h1>
        <h6 className='place__place-duration'>{props.startDate} - {props.endDate}</h6>
        <p className='place__place-description'>{props.description}</p>
      </div>
    </div>
  )
}