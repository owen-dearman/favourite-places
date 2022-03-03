//This component displays the information for each favourite place
interface placeDetails {
  title: string;
  name: string;
  country: string;
  timesVisited: number;
  placeImage: string[];
  locationLink: string;
  description: string;
}

function PlaceItem(place: placeDetails): JSX.Element {
  return (
    < div className="contentBlock" >
      <h2 style={{color: "blue", fontSize: "21px" }}>{place.title}</h2>
      <img className="image" src={place.placeImage[0]} alt={place.placeImage[1]} />
      <h2>
        {place.name} ({place.country})
      </h2>
      <p>{place.description}</p>
      <a href={place.locationLink}>
        Where is this place?
      </a>
      <p>Times Visited: {place.timesVisited}</p>
    </div>
  );
}

export default PlaceItem;
