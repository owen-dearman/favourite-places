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
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "blue" }}>{place.title}</h2>
      <img src={place.placeImage[0]} alt={place.placeImage[1]} />
      <h2>
        {place.name} ({place.country})
      </h2>
      <p>{place.description}</p>
      <a href={place.locationLink} style={{ textAlign: "left" }}>
        Where is this place?
      </a>
      <p style={{ textAlign: "right" }}>Times Visited: {place.timesVisited}</p>
    </div>
  );
}

export default PlaceItem;
