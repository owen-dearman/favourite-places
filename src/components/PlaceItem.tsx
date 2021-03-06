//This component displays the information for each favourite place
import placesInfoInterface from "../placesInfoInterface";

function PlaceItem(place: placesInfoInterface): JSX.Element {
  return (
    <div id={place.linkID} className="ContentBlock">
      <h2 className="FormatHeader">{place.title}</h2>
      <img
        className="image"
        src={place.placeImage[0]}
        alt={place.placeImage[1]}
      />
      <h2 className="FormatTitle">
        {place.name} ({place.country})
      </h2>
      <p className="FormatText">{place.description}</p>
      <a href={place.locationLink} className="FormatText">
        Where is this place?
      </a>
      <p className="FormatText">Times Visited: {place.timesVisited}</p>
      <a className="LinkPlace" href="#pageTop">
        Return To Top
      </a>
    </div>
  );
}

export default PlaceItem;
